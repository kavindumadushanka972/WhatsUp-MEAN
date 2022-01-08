import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  constructor(private navCtl: NavController) { }

  ngOnInit() {
  }

  selectChat(){
    console.log("selected")
    this.navCtl.navigateForward('messages')
  }

}
