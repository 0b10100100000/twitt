import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeedsService } from './feeds.service';
import { TrendingTopicsService } from './trending-topics.service';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { FeedsComponent } from './feeds/feeds.component';
import { TrendingComponent } from './trending/trending.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetComponent } from './auth/reset/reset.component';

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { FormsModule } from '@angular/forms';

import { MessagesService } from "./messages.service";

@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent,
    TrendingComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    FeedsService,
    TrendingTopicsService,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
