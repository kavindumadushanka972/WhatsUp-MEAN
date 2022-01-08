import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  chats: any [] = [];
  messages: any [] = [];

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
    .subscribe(resp => {
      this.chats = resp
    console.log(this.chats)})
  }

  getLastMessageDate(index){
    this.messages = this.chats[index].messages //store all the messages 
    if(this.messages.length == 0) return ''
    return this.messages[this.messages.length-1].updatedAt //returns the last message sent timestamp
  }

}
