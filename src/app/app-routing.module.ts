import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AndroidComponent } from './pages/android/android.component';
import { WebComponent } from './pages/web/web.component';
const routes: Routes = [
{ path: 'home', component: HomeComponent},
{path:'android',component: AndroidComponent},
{path:'web',component: WebComponent},
{path:'',redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
