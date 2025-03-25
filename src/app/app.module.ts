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
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
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

import {
  singleUserReducer,
  userListReducer,
} from '../services/states/users/users.reducers';
import { UserEffects } from '../services/states/users/users.effects';
import { FeedBacksApi, PricingApi, UsersApi } from 'src/services';
import { ProjectsApi } from 'src/services';
import { API_CONFIG } from 'src/services/servers';
import { UsersComponent } from './components/users/users.component'; // Importer la configuration de l'API
import { headerReducer } from 'src/services/states/headers/headers.reducers';
import { projectReducer } from 'src/services/states/projects/projects.reducers';
import { feedbackReducer } from 'src/services/states/feedbacks/feedbacks.reducers';
import { HeadersEffects } from 'src/services/states/headers/headers.effects';
import { ProjectEffects } from 'src/services/states/projects/projects.effects';
import { FeedbacksEffects } from 'src/services/states/feedbacks/feedbacks.effects';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { pricingReducer } from 'src/services/states/pricings/pricings.reducers';
import { PricingEffects } from 'src/services/states/pricings/pricings.effects';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideMenuComponent,
    UsersComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CarouselModule,
    TagModule,
    RatingModule,
    FormsModule,
    NzPageHeaderModule,
    BrowserAnimationsModule,
    NzCardModule,
    NzGridModule,
    NzBreadCrumbModule,
    NzSpaceModule,
    NzButtonModule,
    NzDrawerModule,
    NzTabsModule,
    NzImageModule,
    NgScrollbarModule,
    StoreModule.forRoot({
      users: userListReducer,
      singleUser: singleUserReducer,
      headers: headerReducer,
      projects: projectReducer,
      feedbacks: feedbackReducer,
      pricings: pricingReducer,
    }),
    EffectsModule.forRoot([
      UserEffects,
      HeadersEffects,
      ProjectEffects,
      FeedbacksEffects,
      PricingEffects,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [
    UsersApi,
    ProjectsApi,
    FeedBacksApi,
    PricingApi,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    { provide: NZ_I18N, useValue: en_US },
    { provide: 'API_CONFIG', useValue: API_CONFIG },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
