import { Bookmark } from '../../shared/bookmarks.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss'],
})
export class BookmarkTileComponent implements OnInit {
  @Input()
  bookmark!: Bookmark;
  tileIconSrc!: string;
  faviconError: boolean;

  constructor() {
    this.faviconError = false;
  }

  ngOnInit(): void {
    this.tileIconSrc = this.bookmark.url.origin + '/favicon.ico';
  }
}
