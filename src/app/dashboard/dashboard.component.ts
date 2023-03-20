import { Component } from '@angular/core';
import { Job } from '../models/job.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
  profile: User;
  receivedProviderAverage = 5;
  receivedRequestorAverage = 5;
  providerCount: number = 0;
  requestorCount: number = 0;
  pSize = 5;
  providedJobs: Job[] = [];
  requestedJobs: Job[] = [];
  userSkills = [{ skillName: "Computers", skillLevel: 1}];
  reviewPage = (jobId: string, jobAcceptedBidId: string) => {  };
}
