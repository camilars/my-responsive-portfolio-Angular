import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './views/home/home.module';
import { ButtonModule } from './components/button/button.module';
import { HeaderModule } from './components/header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './views/about/about.module';
import { SkillsComponent } from './views/skills/skills.component';
import { QualificationComponent } from './views/qualification/qualification.component';



const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'work-station-details/:id',
      //   loadChildren: () => WorkStationDetailsModule,
      // },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    QualificationComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule.forChild(routes),
    BrowserModule,
    HomeModule,
    ButtonModule,
    HeaderModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
