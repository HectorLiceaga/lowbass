import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LowbassComponent } from './lowbass/lowbass.component';
import { LowbassAboutComponent } from './lowbass-about/lowbass-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lowbass',
    pathMatch: 'full'
  },
  {
    path: 'lowbass',
    component: LowbassComponent
  },
  {
    path: 'about',
    component: LowbassAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
