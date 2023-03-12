import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.sass']
})
export class ListingComponent implements OnInit {
  isOwner = true;
  listingInformation: any;
  listingID=39;
  requestorPicture: String = '';
  reviewNum = '';
  requestor = 'Me';

  constructor(
    public jobsService: JobsService
  ) {}

  ngOnInit() {
    this.listingInformation =  this.jobsService.getJob("39");
    console.log(this.listingInformation);
  }

  accept = (bidID: number, bidProviderId: number) => {

  }

  newBid = (listingID: number) => {

  }
}
