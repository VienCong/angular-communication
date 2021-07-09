import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { InputParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

const routes: Routes = [{ path: '', component: InputParentComponent }];

@NgModule({
  declarations: [
    InputParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class InputModule { }