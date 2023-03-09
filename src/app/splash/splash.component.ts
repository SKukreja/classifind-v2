import { Component } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.sass']
})
export class SplashComponent {
  loggedIn: boolean = false;
  suggested: { id: number, jobTitle: string, skillName: string, jobImage: string, jobDescription: string}[] = [
    { "id": 0, "jobTitle": "Test1", "skillName": "Carpentry", "jobImage": "https://picsum.photos/200", "jobDescription": "This is test job 1" },
    { "id": 1, "jobTitle": "Test2", "skillName": "Plumbing", "jobImage": "https://picsum.photos/200", "jobDescription": "This is test job 2" },
    { "id": 2, "jobTitle": "Test3", "skillName": "Painting", "jobImage": "https://picsum.photos/200", "jobDescription": "This is test job 3" }
];

  viewListing(id: number) {

  }
}
