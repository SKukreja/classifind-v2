import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent {
  searchResults: { id: number, jobTitle: string, skillName: string, jobImage: string, jobDescription: string, jobCategory: string, jobPostingDate: string }[] = [
  new Listing(0, "Test1", "Carpentry", "https://picsum.photos/200", "This is test job 1", "test", "3/9/2023"),
  new Listing(1, "Test2", "Carpentry", "https://picsum.photos/200", "This is test job 2", "test", "3/9/2023"),
  new Listing(2, "Test3", "Carpentry", "https://picsum.photos/200", "This is test job 3", "test", "3/8/2023"),
  new Listing(3, "Test4", "Carpentry", "https://picsum.photos/200", "This is test job 4", "test", "3/8/2023"),
  new Listing(4, "Test5", "Carpentry", "https://picsum.photos/200", "This is test job 5", "test", "3/7/2023"),
  new Listing(5, "Test6", "Carpentry", "https://picsum.photos/200", "This is test job 6", "test", "3/6/2023"),
  new Listing(6, "Test7", "Carpentry", "https://picsum.photos/200", "This is test job 7", "test", "3/5/2023"),
  ]
  dataLength = this.searchResults.length
  openListing = (id: number) => {

  }
}

export class Listing {

  constructor(
    public id: number,
    public jobTitle: string,
    public skillName: string,
    public jobImage: string,
    public jobDescription: string,
    public jobCategory: string,
    public jobPostingDate: string
  ) {  }

}