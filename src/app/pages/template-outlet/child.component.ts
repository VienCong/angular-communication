
import { Component, ContentChild, TemplateRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'template-outlet-child',
  template: `
   <ng-container *ngTemplateOutlet="templateRef; context: {
      title: title,
      content: content
    }"></ng-container>
  `,
})
export class ChildComponent implements AfterViewInit {

  title = 'Just a random title'
  content = 'Some internal content';
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;

  constructor() {

  }

  ngAfterViewInit(){
    console.log(this.templateRef, 'templateRef');
    
  }


}