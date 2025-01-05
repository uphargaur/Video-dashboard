import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private baseUrl = 'http://localhost:8080/api/';
  
  
  constructor(private http: HttpClient) {}

  getVideos(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}videos?page=5`);  // Static page 2 for initial call
  }

  getVideosByPage(page: number): Observable<any> {
    const url = `${this.baseUrl}videos?page=${page}`;
    console.log('Fetching videos from:', url);  // Corrected string interpolation
    return this.http.get<any>(url);
  }

  searchVideos(searchTerm: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}search?q=${searchTerm}`);
  }
}
