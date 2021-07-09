import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ParentComponent } from './parent.component';
import { SiblingComponent } from './sibling.component';
import { SiblingChildComponent } from './sibling-child.componet'
import { DataService } from './service'

const routes: Routes = [{ path: '', component: ParentComponent }];

@NgModule({
  declarations: [
    ParentComponent,
    SiblingComponent,
    SiblingChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [DataService],
})
export class ByServiceModule { }