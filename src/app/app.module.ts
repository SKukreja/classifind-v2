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
import { bootstrapPinAngleFill, bootstrapSearch, bootstrapPlus, bootstrapPersonCircle, bootstrapClock } from '@ng-icons/bootstrap-icons';
import { ResultsComponent } from './results/results.component';
import { NgPipesModule } from 'ngx-pipes';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { BidComponent } from './bid/bid.component';
import { ListingComponent } from './listing/listing.component';
import { ManageComponent } from './manage/manage.component';
import { BrowseComponent } from './browse/browse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashComponent,
    SearchComponent,
    ResultsComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    CreateListingComponent,
    CreateReviewComponent,
    BidComponent,
    ListingComponent,
    ManageComponent,
    BrowseComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgPipesModule,
    AppRoutingModule,
    FormsModule,
    NgIconsModule.withIcons({ bootstrapPinAngleFill, bootstrapSearch, bootstrapPlus, bootstrapPersonCircle, bootstrapClock })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
