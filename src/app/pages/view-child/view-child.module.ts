import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

const routes: Routes = [{ path: '', component: ParentComponent }];

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class ViewChildModule { }