import { Component, OnInit, OnDestroy } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { Subscription } from "rxjs";
import { Job } from '../models/job.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit, OnDestroy {
  private jobsSub: Subscription = new Subscription;
  isLoading = false;
  totalJobs = 0;
  jobsPerPage = 2;
  currentPage = 1;
  searchResults: Job[] = [];
  dataLength = this.searchResults.length
  userIsAuthenticated = false;
  //userId: string;  
  //private authStatusSub: Subscription;

  constructor(
    public jobsService: JobsService
    //private authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.jobsService.getJobs(this.jobsPerPage, this.currentPage);
    //this.userId = this.authService.getUserId();
    this.jobsSub = this.jobsService
      .getJobsUpdateListener()
      .subscribe((jobData: { jobs: Job[]; jobCount: number }) => {
        this.isLoading = false;
        this.totalJobs = jobData.jobCount;
        this.searchResults = jobData.jobs;
      });
    /*this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });*/
  }

  openListing = (id: number) => {

  }

  ngOnDestroy() {
    this.jobsSub.unsubscribe();
    //this.authStatusSub.unsubscribe();
  }
}