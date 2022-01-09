import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  data: any;
  message: string = ''

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.chat;
      }
    })
  }

  ngOnInit() {
  }

  postMessage(){
    let user = JSON.parse(this.api.getUser()) //make an object from string

    let obj = {
      message: this.message,
      from: user._id,
      chat_id: this.data._id
    }

    this.api.postResource('/messages', obj)
    .subscribe(resp => {
      console.log(resp);
      this.message = ''
    })
  }

}
