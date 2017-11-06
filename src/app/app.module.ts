import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Ng2Webstorage } from 'ng2-webstorage';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular2-toaster';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeComponent } from './theme/theme.component';
import { AppComponent } from './app.component';

import { AppRoutes } from './app.routes';
import { ThemeRoutes } from './theme/theme.routes';

import { LayoutModule } from './theme/layouts/layout.module';
import { SharedModule } from './components/shared/shared.module';
import { LandingModule } from './components/landing/landing.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { OrganizationModule } from './components/masters/organization/organization.module';

import { SharedScriptLoaderService } from './components/shared/service/shared-script-loader.service';
import { SharedCanActivateAuthService } from './components/shared/service/shared-can-activate-auth.service';

@NgModule({
  declarations: [
    ThemeComponent,
    AppComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    Ng2Webstorage,
    Ng2Webstorage.forRoot({ prefix: 'recpro', separator: '.', caseSensitive: true }),
    ToasterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    SharedModule,
    LandingModule,
    AppRoutes,
    ThemeRoutes,
    DashboardModule,
    OrganizationModule,
  ],
  providers: [
    SharedScriptLoaderService,
    SharedCanActivateAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
