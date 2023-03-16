import { Component, OnInit } from '@angular/core';
import { Job } from '../models/job.model';
import { Bid } from '../models/bid.model';
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { JobsService } from '../services/jobs.service';
import { BidsService } from '../services/bids.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.sass']
})
export class JobComponent implements OnInit {
  private jobsSub: Subscription = new Subscription;
  private bidsSub: Subscription = new Subscription;
  isOwner = true;
  isLoading = false;
  listingInformation: Job;
  loggedIn = true;
  listingID: string;
  bidsPerPage = 2;
  currentPage = 1;
  bidList: Bid[];
  totalBids: number;
  requestorPicture: string = '';
  reviewNum = '';
  requestor = 'Me';

  constructor(
    public jobsService: JobsService,
    public bidsService: BidsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe( params => this.listingID = params['_id'] );
  }

  ngOnInit() {
    this.jobsService.getJob(this.listingID + "");
    this.jobsSub = this.jobsService
      .getJobUpdateListener()
      .subscribe(job => {
        this.listingInformation = job.job;
      });
    this.bidsService.getBids(this.listingID, this.bidsPerPage, this.currentPage);
    console.log(this.listingID);
    this.bidsSub = this.bidsService
      .getBidsUpdateListener()
      .subscribe((bidData: { bids: Bid[]; bidCount: number }) => {
        console.log(bidData);
        this.isLoading = false;
        this.totalBids = bidData.bidCount;
        this.bidList = bidData.bids;
      });
  }

  accept = (bidID: string, bidProviderId: string) => {
  }

  newBid = (listingID: string) => {

  }
}
