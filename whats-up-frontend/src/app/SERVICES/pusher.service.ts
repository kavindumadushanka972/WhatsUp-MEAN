import { Injectable } from '@angular/core';
import Pusher from 'pusher-js'

@Injectable({
  providedIn: 'root'
})
export class PusherService {

  pusher: any;

  constructor() { 
    this.pusher = new Pusher('05c45d947104d2bc7d37',{
      cluster: 'ap2',
      forceTLS: true
    })
  }

  subscribeToChannel(channelName: String, events: String[], cb: Function){
    var channel = this.pusher.subscribe(channelName);

    events.forEach(event => {
      channel.bind(event, function(data){
        cb(data)
      })
    })
  }

}
