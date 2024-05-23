import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './player/home/home.component';

const routes: Routes = [
  {path: 'player/index', component: HomeComponent},
  {path: 'player', redirectTo:'player', pathMatch:'full'},
  {path: '', redirectTo:'player', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
