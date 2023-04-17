import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"library",component:LibraryComponent},
  {path:"about",component:AboutComponent },
  {path:"**",redirectTo:"home"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
