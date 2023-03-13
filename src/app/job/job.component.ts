import { Component, OnInit } from '@angular/core';
import { Job } from '../models/job.model';
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.sass']
})
export class JobComponent implements OnInit {
  private jobsSub: Subscription = new Subscription;
  isOwner = true;
  listingInformation: Job;
  loggedIn = true;
  listingID: number;
  requestorPicture: string = '';
  reviewNum = '';
  requestor = 'Me';

  constructor(
    public jobsService: JobsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe( params => this.listingID = params['_id'] );
  }

  ngOnInit() {
    this.jobsService.getJob(this.listingID + "");
    this.jobsSub = this.jobsService
      .getJobUpdateListener()
      .subscribe(job => {
        console.log(job);
        this.listingInformation = job.job;
      });
  }

  accept = (bidID: number, bidProviderId: number) => {

  }

  newBid = (listingID: number) => {

  }
}
