import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _snackBar: MatSnackBar,
  ) {}

  isLoading = false;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    content: new FormControl('',),
    privacy: new FormControl('', Validators.requiredTrue)
  });


  cancel() {
    this.form.setValue({
      name: '',
      mail: '',
      content: '',
      privacy: false
    })
  }

  send() {
    this.isLoading = true;
    setTimeout(() => {
      this.cancel();
      this.isLoading = false;
      this._snackBar.open('Formular erfolgreich versendet!', 'Ok.', {
        panelClass: 'success',
        duration: 3000,
      })
    }, 3000);
  }
}
