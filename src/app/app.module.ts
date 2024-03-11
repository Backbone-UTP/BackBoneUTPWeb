import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MembersComponent } from './pages/members/members.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownComponent,
    HomeComponent,
    NavbarComponent,
    MembersComponent,
    ProyectsComponent,
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
