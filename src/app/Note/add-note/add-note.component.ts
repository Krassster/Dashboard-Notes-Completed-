import { NoteService } from '../../shared/note.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../shared/note.model';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent {
  showValidationErrors: boolean;
  constructor(
    private noteService: NoteService,
    private router: Router,
    private notificationServive: NotificationService
  ) {
    this.showValidationErrors = false;
  }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      const note = new Note(form.value.title, form.value.content);

      this.noteService.addNote(note);
      this.router.navigateByUrl('/notes');

      this.notificationServive.show('Note created!');
    } else {
      this.showValidationErrors = true;
    }
  }
}
