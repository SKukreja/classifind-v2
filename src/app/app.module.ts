import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SplashComponent } from './splash/splash.component';
import { SearchComponent } from './search/search.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapPinAngleFill, bootstrapSearch } from '@ng-icons/bootstrap-icons';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    NgIconsModule.withIcons({ bootstrapPinAngleFill, bootstrapSearch })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
