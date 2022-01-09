import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  username: string = ''

  constructor(private api: ApiService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  submit(){ //register
    let obj = {
      name : this.username
    }

    this.api.postChats(obj)
    .subscribe((resp) => {
      this.api.saveUser(resp);
      this.navCtrl.navigateForward('home')
    })
  }

}
