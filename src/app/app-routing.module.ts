import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostsComponent } from './posts/posts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { ReativeregesterComponent } from './reativeregester/reativeregester.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path:'Home' , component:HomeComponent},
  {path:'products' , component:ProductsComponent},
  {path:'product/:pid' , component:ProductdetailsComponent},
  {path:'users' , component:UsersComponent},
  {path:'posts' , component:PostsComponent},
  {path:'comment/:postid',component:CommentsComponent},
  {path:'register' , component:RegisterComponent },
  {path:'newregister' , component: ReativeregesterComponent },
  {path:'login' , component:LoginComponent },
  {path:'notes' , component: NotesComponent},
  {path: '**', component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
