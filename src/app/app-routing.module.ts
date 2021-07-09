import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputParentComponent } from './pages/input/parent.component'

const routes: Routes = [
  {
    path: 'input',
    loadChildren: () =>
      import('./pages/input/input.module').then(m => m.InputModule),
  },
  {
    path: 'output',
    loadChildren: () =>
      import('./pages/output/output.module').then(m => m.OutputModule),
  },
  {
    path: 'by-service',
    loadChildren: () =>
      import('./pages/by-service/by-service.module').then(m => m.ByServiceModule),
  },
  {
    path: 'ng-model',
    loadChildren: () =>
      import('./pages/ng-model/ng-model.module').then(m => m.NgModelModule),
  },
  {
    path: 'view-child',
    loadChildren: () =>
      import('./pages/view-child/view-child.module').then(m => m.ViewChildModule),
  },
  {
    path: 'template-outlet',
    loadChildren: () =>
      import('./pages/template-outlet/template-outlet.module').then(m => m.TemplateOutletModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
