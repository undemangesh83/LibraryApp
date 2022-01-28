import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { PublicComponent } from './public/public.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path:'user',
    component:UserComponent,
    loadChildren:() =>import('./user/user.module').then((x)=>x.UserModule),
  },
  {
    path:'public',
    component:PublicComponent,
    loadChildren:() =>import('./public/public.module').then((x)=>x.PublicModule),
  },
  {
    path:'auth',
    component:AuthComponent,
    loadChildren:() =>import('./auth/auth.module').then((x)=>x.AuthModule),
  },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
