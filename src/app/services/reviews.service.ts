import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Review } from '../models/review.model';

@Injectable({ providedIn: "root" })
export class ReviewsService {
    constructor(private http: HttpClient) {}

    getReviewsByRequestor(id: string, postsPerPage: number, currentPage: number) {
      const queryParams = `?id=${id}`;
      return this.http.get<Review[]>("http://localhost:3000/api/reviewsByRequestor" + queryParams);
    }

    getReviewsByProvider(id: string, postsPerPage: number, currentPage: number) {
      const queryParams = `?id=${id}`;
      return this.http.get<Review[]>("http://localhost:3000/api/reviewsByProvider" + queryParams);
    }
}