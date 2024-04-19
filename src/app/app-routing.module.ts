import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { HomeComponent } from './modules/home/components/home.component';
import { NotfoundComponent } from './modules/notfound/components/notfound.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },  
  {
    path: 'Home',
    loadChildren: () => import("./modules/home/home.module")
    .then(m => m.HomeModule),
    
  },
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes), provideNoopAnimations()],
})
export class AppRoutingModule { }
