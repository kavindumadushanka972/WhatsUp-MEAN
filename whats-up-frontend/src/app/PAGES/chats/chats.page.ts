import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/SERVICES/api.service';
import { NavigationExtras } from '@angular/router'

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

  selectChat(c){
    let navigationExtra: NavigationExtras = {
      state:{
        chat: c //passing chat when navigating
      }
    }
    this.navCtl.navigateForward('messages', navigationExtra)
  }

  getAllChats(){
    this.api.getChats()
    .subscribe(resp => {
      this.chats = resp
    })
  }

  getLastMessageDate(index){
    this.messages = this.chats[index].messages //store all the messages 
    if(this.messages.length == 0) return ''
    return this.messages[this.messages.length-1].updatedAt //returns the last message sent timestamp
  }

}
