import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-video-list',
  standalone: false,
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})

export class VideoListComponent implements OnInit {
  videos: any[] = [];
  totalPages: number = 0;
  currentPage: number = 1;
  searchTerm: string = '';
  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.fetchVideos(this.currentPage);
  }

  fetchVideos(page: number) {
    this.videoService.getVideosByPage(page).subscribe((response) => {
      console.log('Response:', response);
      this.videos = response.videos;
      this.currentPage = response.page;
      this.totalPages = response.totalPages;
    });
  }

  updatePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.fetchVideos(page);
    }
  }
  loadVideos(): void {
    if (this.searchTerm.trim() === '') {
      // Fetch default videos if no search term is provided
      this.videoService.getVideosByPage(this.currentPage).subscribe((response) => {
        this.videos = response.videos;
        this.totalPages = response.totalPages;
      });
    } else {
      // Fetch videos with the search term
      this.searchVideos();
    }
  }
  searchVideos(): void {
    if (this.searchTerm.trim() === '') {
      this.loadVideos(); // Fetch default videos when the search term is cleared
    } else {
      this.videoService.searchVideos(this.searchTerm).subscribe((response) => {
        this.videos = response.videos;
        this.totalPages = response.totalPages;
      });
    }
  }
}



