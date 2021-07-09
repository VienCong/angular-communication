
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'output-child',
  template: `
      <button (click)="sendMessage()">Send Message</button>
      <button (click)="sendMessageNext()">sendMessageNexte</button>
  `,
})
export class ChildComponent {

  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {

    this.messageEvent.subscribe((next: string) => {
      console.log(next, 'aaaaaaaaaaaaaaaaaaa');

    }, (error: string) => {
      console.log(error, 'error');

    }, (complete: string) => {
      console.log(complete);

    })
  }

  sendMessage() {
    // this.messageEvent.emit(this.message)

    // this.messageEvent.error('bbbbbbbbbbbb')
    this.messageEvent.emit(this.message + Math.random())
    // this.messageEvent.complete()

  }

  sendMessageNext(){
    this.messageEvent.next('通过Next方式。。。')
  }
}