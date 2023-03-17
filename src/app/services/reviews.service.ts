import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { Review } from '../models/review.model';

@Injectable({ providedIn: "root" })
export class ReviewsService {
    private review: Review;
    private reviewUpdated = new Subject<{ review: Review }>();
    private reviews: Review[] = [];
    private reviewsUpdated = new Subject<{ reviews: Review[]; reviewCount: number }>();

    constructor(private http: HttpClient, private router: Router) {}

    getReviewsByRequestor(id: string, postsPerPage: number, currentPage: number) {
      const queryParams = `?id=${id}&pagesize=${postsPerPage}&page=${currentPage}`;
        this.http
          .get<{ message: string; reviews: Review[]; maxReviews: number }>(
            "http://localhost:3000/api/reviewsByRequestor" + queryParams
          )
          .pipe(
            map(reviewData => {
              return {
                reviews: reviewData.reviews.map(review => {
                  return {                         
                    _id: review._id,
                		reviewComments: review.reviewComments,
                		reviewRating: review.reviewRating,
                    reviewedJobId: review.reviewedJobId,
                		job: review.job,
                		reviewDate: review.reviewDate,
                    requestorUserId: review.requestorUserId,
                    providerUserId: review.providerUserId,
                		jobRequestor: review.jobRequestor,
                    jobProvider: review.jobProvider
                  };
                }),
                maxReviews: reviewData.maxReviews
              };
            })
          )
          .subscribe(transformedReviews => {
            this.reviews = transformedReviews.reviews;
            this.reviewsUpdated.next({
              reviews: [...this.reviews],
              reviewCount: transformedReviews.maxReviews
            });
          });
      }

    getReviewsByProvider(id: string, postsPerPage: number, currentPage: number) {
        const queryParams = `?id=${id}&pagesize=${postsPerPage}&page=${currentPage}`;
          this.http
            .get<{ message: string; reviews: Review[]; maxReviews: number }>(
              "http://localhost:3000/api/reviewsByProvider" + queryParams
            )
            .pipe(
              map(reviewData => {
                return {
                  reviews: reviewData.reviews.map(review => {
                    return {                         
                      _id: review._id,
                      reviewComments: review.reviewComments,
                      reviewRating: review.reviewRating,
                      reviewedJobId: review.reviewedJobId,
                      job: review.job,
                      reviewDate: review.reviewDate,
                      requestorUserId: review.requestorUserId,
                      providerUserId: review.providerUserId,
                      jobRequestor: review.jobRequestor,
                      jobProvider: review.jobProvider
                    };
                  }),
                  maxReviews: reviewData.maxReviews
                };
              })
            )
            .subscribe(transformedReviews => {
              this.reviews = transformedReviews.reviews;
              this.reviewsUpdated.next({
                reviews: [...this.reviews],
                reviewCount: transformedReviews.maxReviews
              });
            });
        }
    
    getReview(postId: string) {
      this.http.get(
        "http://localhost:3000/api/review?id=" + postId
      )
      .subscribe(response => {
        this.review = response as Review;
        this.reviewUpdated.next({
          review: this.review,
        });
      });
    }

    getReviewUpdateListener() {
      return this.reviewUpdated.asObservable();
    }

    getReviewsUpdateListener() {
      return this.reviewsUpdated.asObservable();
    }
}