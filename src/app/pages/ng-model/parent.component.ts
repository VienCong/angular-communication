import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'ng-model-parent',
  template: `
    <div>input-parent-component</div>
    <input  [(ngModel)]="parentMessage">
    <ng-model-child [(childMessage)]="parentMessage"></ng-model-child>
  `,
  styleUrls: []
})
export class ParentComponent {
  parentMessage: string = '我的';
  constructor() {
  }
}