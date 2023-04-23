import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AndroidComponent } from './pages/android/android.component';
import { WebComponent } from './pages/web/web.component';
import { ContactmeComponent } from './pages/contactme/contactme.component';
const routes: Routes = [
{ path: 'home', component: HomeComponent},
{path:'android',component: AndroidComponent},
{path:'web',component: WebComponent},
{path:'contactame',component: ContactmeComponent},
{path:'',redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
