import { Injectable } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Injectable()
export class MessagesService {
  @Output() messageFound = new EventEmitter();
  message: string = '';
  class: string = '';

  loggedIn = false;

  constructor() { }

  setMessage(msg, cls) {
    console.log("setting msg :" + msg);
    this.message = msg;
    this.class = cls;
    this.messageFound.emit(msg);
  }

  getMessage() {
    console.log("returning msg : " + this.message);
    return this.message;

    // return {
    //   message: this.message,
    //   class: this.class
    // }
  }

  setLoggedInStatus(status) {
    this.loggedIn = status;
  }

  getLoggedInStatus() {
    return this.loggedIn;
  }

}
