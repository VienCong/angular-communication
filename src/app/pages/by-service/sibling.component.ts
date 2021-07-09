import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from "./service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sibling',
  template: `
    {{message}}
    <button (click)="newMessage()">New Message</button>
  `,
  styleUrls: []
})
export class SiblingComponent implements OnInit, OnDestroy {

  message: string | undefined;
  subscription: Subscription | undefined;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    (this.subscription as Subscription).unsubscribe();
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }

}