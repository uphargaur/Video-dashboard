import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private apiUrl = 'https://fampay-video-fetcher-production.up.railway.app/api/videos?page=2';

  constructor(private http: HttpClient) {}

  getVideos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
