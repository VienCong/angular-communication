import { Component, ViewChild, AfterViewInit, ViewContainerRef, OnInit } from '@angular/core';
import { ChildComponent } from './child.component'

@Component({
  selector: 'app-parent',
  template: `
  <div>
    view-child-parent-component
    Message: {{message}}
  </div>
    <view-child #viewChild></view-child>
    <button (click)="changeMessage()">改变父组件message</button>
  `,
})
export class ParentComponent implements OnInit, AfterViewInit {
  /** 两种引用方式 */
  @ViewChild('viewChild', { static: false }) childComponent: ChildComponent | undefined;
  // @ViewChild(ChildComponent) childComponent: ChildComponent | undefined;

  @ViewChild('viewChild', { read: ViewContainerRef }) childComponent1: ViewContainerRef | undefined;


  message: string = '我是父组件。。。。';
  constructor() { }

  changeMessage() {
    // this.message = this.childComponent!.message;
    // this.childComponent!.message = this.message ;
  }
  ngOnInit() {
    console.log('ngOnInit',this.childComponent);
    
  }

  ngAfterViewInit() {
    console.log('component', this.childComponent, 'ref', this.childComponent1);

    // console.log(this.childComponent!.message);
  }
}