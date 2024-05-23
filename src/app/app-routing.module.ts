import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './player/home/home.component';

const routes: Routes = [
  {path: 'player/home', component: HomeComponent},
  {path: 'player', redirectTo:'player/home', pathMatch:'full'},
  {path: '', redirectTo:'player/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
