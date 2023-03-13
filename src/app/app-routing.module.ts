import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidComponent } from './bid/bid.component';
import { BrowseComponent } from './browse/browse.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobComponent } from './job/job.component';
import { ManageComponent } from './manage/manage.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResultsComponent } from './results/results.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'job/:_id', component: JobComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: ResultsComponent },
  { path: 'new', component: CreateListingComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'create-review', component: CreateReviewComponent },
  { path: 'bid', component: BidComponent },
  { path: 'browse', component: BrowseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
