import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path:'', component: AppComponent},
  {
    path:'profile',
    loadChildren: () => import('./profile/profile.module') .then(m => m.ProfileModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module') .then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
