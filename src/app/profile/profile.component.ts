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
  requestedJobs: Job[];
  requestorPage = 0;
  pSize = 0;
  receivedRequestorPage = 0;
  receivedProviderPage = 0;
  receivedRequestorReviews: Review[];
  receivedProviderReviews: Review[];
  receivedProviderAverage = 5;
  receivedRequestorAverage = 5;
  loggedIn = false;
  providerCount: number;
  requestorCount: number;
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

    this.jobsService.getJobsByUser(this.profileId, 0, 0);
    this.jobsSub = this.jobsService
      .getJobsUpdateListener()
      .subscribe((jobData: { jobs: Job[]; jobCount: number }) => {
        this.requestorCount = jobData.jobCount;
        this.requestedJobs = jobData.jobs;        
      });

    this.reviewsService.getReviewsByRequestor(this.profileId, 0, 0);
    this.reviewsSub = this.reviewsService
      .getReviewsUpdateListener()
      .subscribe((reviewData: { reviews: Review[]; reviewCount: number }) => {
        this.requestorCount = reviewData.reviewCount;
        this.receivedRequestorReviews = reviewData.reviews;
      });

    this.reviewsService.getReviewsByProvider(this.profileId, 0, 0);
    this.reviewsSub = this.reviewsService
      .getReviewsUpdateListener()
      .subscribe((reviewData: { reviews: Review[]; reviewCount: number }) => {
        this.providerCount = reviewData.reviewCount;
        this.receivedProviderReviews = reviewData.reviews;
      });
  }

  newListing() {

  }

  viewProfile(userId: string) {

  }

  viewListing(jobId: string) {

  }
}
