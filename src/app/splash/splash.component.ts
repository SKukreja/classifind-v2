import { Component } from '@angular/core';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.sass']
})
export class SplashComponent {
  loggedIn: boolean = false;
  suggested: { 
    _id: number, 
    jobTitle: string, 
    skillName: string, 
    jobImage: string, 
    jobDescription: string, 
    jobCategory: string, 
    jobPostingDate: string, 
    jobAddressStreet: string,
    jobAddressCity:string,
    jobAddressCountry:string, 
    jobAddressPostal:string,
   }[] = [
      {"_id":0, "jobTitle": "Test1", "skillName": "Carpentry", "jobImage": "https://picsum.photos/200", "jobDescription": "This is test job 1", "jobCategory": "test", "jobPostingDate": "3/9/2023", "jobAddressStreet": "", "jobAddressCity": "", "jobAddressCountry": "", "jobAddressPostal": ""},
      {"_id":1, "jobTitle": "Test2", "skillName": "Carpentry", "jobImage": "https://picsum.photos/200", "jobDescription": "This is test job 2", "jobCategory": "test", "jobPostingDate": "3/9/2023", "jobAddressStreet": "", "jobAddressCity": "", "jobAddressCountry": "", "jobAddressPostal": ""},
      {"_id":2, "jobTitle": "Test3", "skillName": "Carpentry", "jobImage": "https://picsum.photos/200", "jobDescription": "This is test job 3", "jobCategory": "test", "jobPostingDate": "3/8/2023", "jobAddressStreet": "", "jobAddressCity": "", "jobAddressCountry": "", "jobAddressPostal": ""},
    ];

  viewListing(id: number) {

  }
}
