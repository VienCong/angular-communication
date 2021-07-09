
import { Component } from '@angular/core';

@Component({
  selector: 'view-child',
  template: `
     <div>{{message}}</div>
  `,
})
export class ChildComponent {

  message: string = "我是子组件的message....."

  constructor() {

  }

 
}