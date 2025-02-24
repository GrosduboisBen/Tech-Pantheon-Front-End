import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { userReducer } from '../services/states/users/users.reducers';
import { UserEffects } from '../services/states/users/users.effects';
import { UsersApi } from 'src/services'; // Importer le service UsersApi
import { API_CONFIG } from 'src/services/servers';
import { UsersComponent } from './components/users/users.component'; // Importer la configuration de l'API

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideMenuComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NzPageHeaderModule,
    BrowserAnimationsModule,
    NzBreadCrumbModule,
    NzSpaceModule,
    NzButtonModule,
    NzDrawerModule,
    NzTabsModule,
    StoreModule.forRoot({ users: userReducer }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    UsersApi,
    { provide: 'API_CONFIG', useValue: API_CONFIG },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
