import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-model-child',
  template: `
      <div>
        child-component
        Say {{ childMessage }}
        <input [(ngModel)]="childMessage" (ngModelChange)="changeInput($event)">
      </div>
  `,
  styleUrls: []
})
export class ChildComponent {

  @Input() public childMessage: string = '';
  @Output() childMessageChange = new EventEmitter<string>();
  constructor() {
  }

  changeInput(e: string) {
    console.log(e, 'eeeeeeeeeeeee');
    this.childMessageChange.emit(e)
  }
}