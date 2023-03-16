import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { Bid } from '../models/bid.model';

@Injectable({ providedIn: "root" })
export class BidsService {
    private bid: Bid;
    private bidUpdated = new Subject<{ bid: Bid }>();
    private bids: Bid[] = [];
    private bidsUpdated = new Subject<{ bids: Bid[]; bidCount: number }>();

    constructor(private http: HttpClient, private router: Router) {}

    getBids(id: string, postsPerPage: number, currentPage: number) {
      const queryParams = `?id=${id}`;
        this.http
          .get<{ message: string; bids: Bid[]; maxBids: number }>(
            "http://localhost:3000/api/bids" + queryParams
          )
          .pipe(
            map(bidData => {
              return {
                bids: bidData.bids.map(bid => {
                  return {                         
                    _id: bid._id,
                    bidDate: bid.bidDate,
                    bidPrice: bid.bidPrice,
                    jobId: bid.jobId,
                    bidProvider: bid.bidProvider,
                  };
                }),
                maxBids: bidData.maxBids
              };
            })
          )
          .subscribe(transformedBids => {
            this.bids = transformedBids.bids;
            this.bidsUpdated.next({
              bids: [...this.bids],
              bidCount: transformedBids.maxBids
            });
          });
      }
    
    getBid(postId: string) {
      this.http.get(
        "http://localhost:3000/api/bid?id=" + postId
      )
      .subscribe(response => {
        this.bid = response as Bid;
        this.bidUpdated.next({
          bid: this.bid,
        });
      });
    }

    getBidUpdateListener() {
      return this.bidUpdated.asObservable();
    }

    getBidsUpdateListener() {
      return this.bidsUpdated.asObservable();
    }
}