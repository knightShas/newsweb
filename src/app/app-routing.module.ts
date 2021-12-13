import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import {EntertainmentnewsComponent} from './entertainmentnews/entertainmentnews.component';
import {HealthnewsComponent} from './healthnews/healthnews.component';
import {SciencenewsComponent} from './sciencenews/sciencenews.component';
import {SportsnewsComponent} from './sportsnews/sportsnews.component';
import {BusinessnewsComponent} from './businessnews/businessnews.component';
import { GeneralnewsComponent } from './generalnews/generalnews.component'

const routes: Routes = [
  {path:'', component:TopheadingComponent}, //home
  {path:'business', component:BusinessnewsComponent}, //businessNews
  {path:'entertainment', component:EntertainmentnewsComponent}, //entertainmentNews
  {path:'general', component:GeneralnewsComponent}, //generalNews
  {path:'health', component:HealthnewsComponent}, //healthNews
  {path:'science', component:SciencenewsComponent}, //scienceNews
  {path:'sports', component:SportsnewsComponent}, //sportsNews
  {path:'technology', component:TechnewsComponent} //techNews
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
