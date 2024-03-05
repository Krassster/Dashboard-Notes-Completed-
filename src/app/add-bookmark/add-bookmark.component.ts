import { BookmarkService } from './../shared/bookmark.service';
import { Bookmark } from './../shared/bookmarks.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss'],
})
export class AddBookmarkComponent {
  constructor(
    private bookmarkService: BookmarkService,
    private router: Router
  ) {}

  onFormSubmit(form: NgForm) {
    const bookmark = new Bookmark(form.value.name, form.value.url);

    this.bookmarkService.addBookmark(bookmark);
    this.router.navigateByUrl('/bookmarks');
  }
}