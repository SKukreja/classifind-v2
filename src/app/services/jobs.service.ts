import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Job } from '../models/job.model';

@Injectable({ providedIn: "root" })
export class JobsService {
    private jobs: Job[] = [];
    private jobsUpdated = new Subject<Job[]>();

    constructor(private http: HttpClient) {}

    getJobs() {
        this.http
          .get<{ message: string; jobs: Job[] }>(
            "http://localhost:3000/api/posts"
          )
          .pipe(map((jobData) => {
            return jobData.jobs.map(job => {
              return {                                
                _id: job._id,
                requestorId: job.requestorId,
                jobTitle: job.jobTitle,
                jobDescription: job.jobDescription,
                jobCategory: job.jobCategory,
                jobAddressStreet: job.jobAddressStreet,
                jobAddressPostal: job.jobAddressPostal,
                jobAddressCity: job.jobAddressCity,
                jobAddressCountry: job.jobAddressCountry,
                jobPostingDate: job.jobPostingDate,
                jobStatus: job.jobStatus
              };
            });
          }))
          .subscribe(transformedPosts => {
            this.jobs = transformedPosts;
            this.jobsUpdated.next([...this.jobs]);
          });
      }
    
    getJob(postId: string) {
      this.http.get<{ message:string; job: Job }>(
        "http://localhost:3000/api/post?id=" + postId
      )
      .subscribe(response => {
        console.log(response);
      });
    }

    getPostUpdateListener() {
      return this.jobsUpdated.asObservable();
    }
}