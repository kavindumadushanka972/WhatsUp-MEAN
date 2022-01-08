import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  constructor(private navCtl: NavController, private api: ApiService) { }

  ngOnInit() {
    this.getAllChats()
  }

  selectChat(){
    console.log("selected")
    this.navCtl.navigateForward('messages')
  }

  getAllChats(){
    this.api.getChats()
    .subscribe(resp => console.log('response', resp))
  }

}
