import { Component, OnInit } from '@angular/core';
import { Job } from '../models/job.model';
import { Review } from '../models/review.model';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { JobsService } from '../services/jobs.service';
import { UsersService } from '../services/users.service';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  private jobsSub: Subscription = new Subscription;
  private usersSub: Subscription = new Subscription;
  private reviewsSub: Subscription = new Subscription;
  loggedIn = true;
  profile: User;
  profileId = '000000000000000000000018';
  receivedProviderAverage = 5;
  receivedRequestorAverage = 5;
  providerCount: number = 0;
  requestorCount: number = 0;
  pSize = 5;
  providedJobs: Job[] = [];
  providerPage: number = 1;
  receivedProviderPage = 0;
  receivedRequestorPage = 0;
  requestorPage: number = 1;
  requestedJobs: Job[] = [];
  receivedProviderReviews: Review[] = [];
  receivedRequestorReviews: Review[] = [];
  userSkills = [{ skillName: "Computers", skillLevel: 1}];
  reviewPage = (jobId: string) => {  };
  manageJob = (jobId: string) => {  };
  viewListing = (jobId: string) => { };
  deleteListing = (jobId: string) => { };
  newListing = () => { };
  viewUser = (userId: string | undefined) => {};
  
  constructor(
    public jobsService: JobsService,
    public usersService: UsersService,
    public reviewsService: ReviewsService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.usersService.getUser(this.profileId);
    this.usersSub = this.usersService
      .getUserUpdateListener()
      .subscribe(user => {
        this.profile = user.user;
      });

    console.log(this.profileId);

    this.jobsService.getJobsByUser(this.profileId + "", 0, 0)
      .subscribe(response => {
        console.log(response);
        response.forEach((job) => {
          this.requestedJobs.push(job as Job);
        });
        console.log(this.requestedJobs.length);
      });



    this.reviewsService.getReviewsByProvider(this.profileId + "", 0, 0)
      .subscribe(response => {
        response.forEach((review) => {
          this.receivedProviderReviews.push(review as Review);
        });
      }); 

    this.reviewsService.getReviewsByRequestor(this.profileId + "", 0, 0)
      .subscribe(response => {
        response.forEach((review) => {
          this.receivedRequestorReviews.push(review as Review);         
        });
      });
  }
}
