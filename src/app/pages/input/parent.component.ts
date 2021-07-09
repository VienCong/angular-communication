import { Component, OnInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'input-parent',
  template: `
    <div>input-parent-component</div>
    <input-child [childMessage]="parentMessage" [message1]="message1" [willChangeValue]="setValueParent" [setObj]="obj"></input-child>
  `,
  styleUrls: []
})
export class InputParentComponent implements OnInit {
  parentMessage: string = '我是父组件message！'
  message1: string = 'message111111111111@@'

  setValueParent: string = 'initial';
  obj = { a: 1, b: 2 }

  constructor() { }


  ngOnInit() {
    setTimeout(() => {
      this.obj.a = 3;
      // 结构重新赋值
      this.obj = { ...this.obj };
      this.setValueParent = 'changeInitial1'
    })
  }
}