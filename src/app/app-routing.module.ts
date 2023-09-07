import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent,pathMatch:'full'},
  {path: 'landing', component: LandingComponent},
  { path: 'home', component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
