import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/SERVICES/api.service';
import { PusherService } from 'src/app/SERVICES/pusher.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  data: any;
  message: string = ''

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private pusher: PusherService) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.chat;
      }
    })
  }

  ngOnInit() {
    this.pusher.subscribeToChannel('message', ['inserted'], (data)=> {
      this.data.messages.push(data)
    })
  }

  postMessage(){
    let user = JSON.parse(this.api.getUser()) //make an object from string

    let obj = {
      message: this.message,
      from: user._id,
      chat_id: this.data._id
    }

    if(this.message != ''){
      this.api.postResource('/messages', obj)
      .subscribe(resp => {
        console.log(resp);
        this.message = ''
      })
    }
    
  }

  unsubscribe(){
    this.pusher.unsubscribe('message')
  }

}
