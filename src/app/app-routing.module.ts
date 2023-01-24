import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './views/about/about.module';
import { HomeModule } from './views/home/home.module';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => HomeModule,
  },
  {
    path: 'home',
    loadChildren: () => HomeModule,
  },
  {
    path: 'about',
    loadChildren: () => AboutModule,
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false }),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
