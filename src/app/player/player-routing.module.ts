import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path: 'player/home', component: HomeComponent},
  {path: 'player', redirectTo:'player/home', pathMatch:'full'},
  {path: '', redirectTo:'player/home', pathMatch:'full'},
  {path: 'player/create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
