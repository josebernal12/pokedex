import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { TypesComponent } from './pages/types/types.component';

const routes: Routes = [
  {
    path: 'types',
    component: TypesComponent
  },
  {
    path: 'types/:type',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
