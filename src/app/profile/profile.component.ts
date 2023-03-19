import { Component, OnInit  } from '@angular/core';
import { Job } from '../models/job.model';
import { User } from '../models/user.model';
import { Review } from '../models/review.model';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { JobsService } from '../services/jobs.service';
import { UsersService } from '../services/users.service';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  private jobsSub: Subscription = new Subscription;
  private usersSub: Subscription = new Subscription;
  private reviewsSub: Subscription = new Subscription;
  profileId: string;
  profile: User;
  requestedJobs: Job[] = [];
  requestorPage = 0;
  pSize = 5;
  receivedRequestorPage = 0;
  receivedProviderPage = 0;
  receivedRequestorReviews: Review[] = [];
  receivedProviderReviews: Review[] = [];
  receivedProviderAverage = 5;
  receivedRequestorAverage = 5;
  loggedIn = false;
  providerCount: number = 0;
  requestorCount: number = 0;
  userSkills = [{ skillName: "Computers", skillLevel: 1}];

  constructor(
    public jobsService: JobsService,
    public usersService: UsersService,
    public reviewsService: ReviewsService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe( params => this.profileId = params['_id'] );
  }

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

  newListing() {

  }

  viewProfile(userId?: string) {

  }

  viewListing(jobId?: string) {

  }
}
