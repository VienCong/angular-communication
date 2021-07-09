import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from "./service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  template: `
    {{message}}
    <div>
      app-sibling-child
      <app-sibling-child></app-sibling-child>
    </div>
    <div>
      app-sibling
      <app-sibling></app-sibling>
    </div>
  `,
  styleUrls: []
})
export class ParentComponent implements OnInit, OnDestroy {

  message: string | undefined;
  subscription: Subscription | undefined;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    (this.subscription as Subscription).unsubscribe();
  }

}