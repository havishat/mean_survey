import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginpollComponent} from './loginpoll/loginpoll.component';
import {CreateComponent} from './create/create.component';
import { PollComponent } from './poll/poll.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginpollComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'cancel',
    redirectTo: "/dashboard"
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreateComponent,
  }, 

  { path: 'poll/:id', 
    pathMatch: 'full',
    component: PollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


