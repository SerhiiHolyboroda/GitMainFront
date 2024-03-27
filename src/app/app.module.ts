import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeModule } from './home/home.module';
import { ErrorInterceptor } from './Components/interceptors/error.interceptor';
import { CoreModule } from './Components/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
 //   ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    CoreModule
  ],
  providers: [
{
  provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
}


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
