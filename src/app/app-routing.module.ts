import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {path: '', component: LandingComponent,pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path: 'landing', component: LandingComponent},
  { path: 'home', component:HomepageComponent},
  { path: 'test', component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
