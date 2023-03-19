import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { Job } from '../models/job.model';

@Injectable({ providedIn: "root" })
export class JobsService {
    private job: Job;
    private jobUpdated = new Subject<{ job: Job }>();
    private jobs: Job[] = [];
    private jobsUpdated = new Subject<{ jobs: Job[]; jobCount: number }>();

    constructor(private http: HttpClient, private router: Router) {}

    getJobs(postsPerPage: number, currentPage: number) {
      const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
        this.http
          .get<{ message: string; jobs: Job[]; maxJobs: number }>(
            "http://localhost:3000/api/jobs" + queryParams
          )
          .pipe(
            map(jobData => {
              return {
                jobs: jobData.jobs.map(job => {
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
                    jobStatus: job.jobStatus,
                    jobImage: job.jobImage
                  };
                }),
                maxJobs: jobData.maxJobs
              };
            })
          )
          .subscribe(transformedJobs => {
            this.jobs = transformedJobs.jobs;
            this.jobsUpdated.next({
              jobs: [...this.jobs],
              jobCount: transformedJobs.maxJobs
            });
          });
      }

    getJobsByUser(id: string, postsPerPage: number, currentPage: number) {
      const queryParams = `?id=${id}`;
      return this.http.get<Job[]>("http://localhost:3000/api/jobsByUser" + queryParams);
    }
    
    getJob(postId: string) {
      this.http.get(
        "http://localhost:3000/api/job?id=" + postId
      )
      .subscribe(response => {
        this.job = response as Job;
        this.jobUpdated.next({
          job: this.job,
        });
      });
    }

    getJobUpdateListener() {
      return this.jobUpdated.asObservable();
    }

    getJobsUpdateListener() {
      return this.jobsUpdated.asObservable();
    }
}