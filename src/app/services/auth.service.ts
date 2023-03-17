import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
providedIn: 'root'
})
export class AuthService {

private readonly apiUrl = 'http://localhost:3000';

constructor(private http: HttpClient) { }

login(username: string, password: string): Observable<any> {
    const data = { username, password };
    return this.http.post(`${this.apiUrl}/login`, data);
}

setToken(token: string): void {
    localStorage.setItem('token', token);
}

getToken(): string | null {
    return localStorage.getItem('token');
}

isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
}

logout(): void {
    localStorage.removeItem('token');
}
}