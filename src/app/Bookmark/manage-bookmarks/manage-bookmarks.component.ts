import { BookmarkService } from '../../shared/bookmark.service';
import { Bookmark } from '../../shared/bookmarks.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-bookmarks',
  templateUrl: './manage-bookmarks.component.html',
  styleUrls: ['./manage-bookmarks.component.scss'],
})
export class ManageBookmarksComponent implements OnInit {
  bookmarks!: Bookmark[];

  constructor(private bookmarkService: BookmarkService) {}
  ngOnInit(): void {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }
}
