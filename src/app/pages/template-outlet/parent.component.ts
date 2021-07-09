import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child.component'

@Component({
  selector: 'app-parent',
  template: `
  <div>
    template-outlet-parent-component
    Message: {{message}}
  </div>
    <template-outlet-child #viewChild>
      <ng-template let-title="title" let-content="content">
        <div [title]="title">Hi, the value is: {{ content }}</div>
      </ng-template>
    </template-outlet-child>
  `,
})
export class ParentComponent {
  message: string = '我是父组件。。。。';
  constructor() { }

}