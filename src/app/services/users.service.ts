import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({ providedIn: "root" })
export class UsersService {
    private user: User;
    private userUpdated = new Subject<{ user: User }>();

    constructor(private http: HttpClient, private router: Router) {}
    
    getUser(postId: string) {
      this.http.get(
        "http://localhost:3000/api/user?id=" + postId
      )
      .subscribe(response => {
        this.user = response as User;
        this.userUpdated.next({
          user: this.user,
        });
      });
    }

    getUserUpdateListener() {
      return this.userUpdated.asObservable();
    }
}