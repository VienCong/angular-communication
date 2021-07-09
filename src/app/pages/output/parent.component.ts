import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <div>
    output-parent-component
    Message: {{message}}
  </div>
    <output-child (messageEvent)="receiveMessage($event)"></output-child>
  `,
})
export class ParentComponent {

  constructor() { }

  message: string | undefined;

  receiveMessage($event: string | undefined) {
    this.message = $event
  }
}