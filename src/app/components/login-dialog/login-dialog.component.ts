import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css',
})
export class LoginDialogComponent {
  isLogged = false;
  enteredUsername = '';
  enteredPassword = '';

  @Output() cancel = new EventEmitter();
  @Output() onLogin = new EventEmitter();

  cancelDialog() {
    this.cancel.emit(false);
  }

  login() {
    console.log(this.enteredUsername);
    console.log(this.enteredPassword);
    this.onLogin.emit({ name: this.enteredUsername, log: true });
  }
}
