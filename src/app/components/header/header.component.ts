import { Component } from '@angular/core';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  imports: [LoginDialogComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isDialogOpen: boolean = false;
  isLogged = false;
  username = '';

  constructor() {
    if (localStorage.getItem('myName') !== null) {
      this.username = localStorage.getItem('myName')!;
      this.isLogged = true;
    }
  }

  openDialog() {
    this.isDialogOpen = true;
  }

  onCancel(res: any) {
    console.log(res);
    this.isDialogOpen = res;
  }

  checkAuth(res: any) {
    if (res['log'] === true) {
      this.isLogged = true;
      this.isDialogOpen = false;
      this.username = res['name'];
      localStorage.setItem('myName', this.username);
    }
  }
}
