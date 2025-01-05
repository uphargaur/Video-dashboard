import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private baseUrl = 'http://localhost:8080/api';

  constructor() {}

  // Fetch a static list of videos (example, page 5)
  getVideos(): Observable<any> {
    const url = `${this.baseUrl}/videos?page=5`;
    return from(fetch(url).then(response => response.json()));
  }

  // Fetch videos based on the current page
  getVideosByPage(page: number): Observable<any> {
    const url = `${this.baseUrl}/videos?page=${page}`;
    return from(fetch(url).then(response => response.json()));
  }

  // Search for videos based on a search term
  searchVideos(searchTerm: string): Observable<any> {
    const url = `${this.baseUrl}/search?q=${searchTerm}`;
    return from(fetch(url).then(response => response.json()));
  }
}
