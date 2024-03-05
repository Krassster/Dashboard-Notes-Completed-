import { NoteService } from '../../shared/note.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../shared/note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent {
  showValidationErrors: boolean;
  constructor(private noteService: NoteService, private router: Router) {
    this.showValidationErrors = false;
  }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      const note = new Note(form.value.title, form.value.content);

      this.noteService.addNote(note);
      this.router.navigateByUrl('/notes');
      console.log(form);
    } else {
      this.showValidationErrors = true;
    }
  }
}