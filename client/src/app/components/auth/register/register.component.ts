import { Component, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';



@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username:  string = '';
  f_name: string = '';
  l_name: string = '';
  email: string = '';
  u_password: string = '';
  m_password: string = '';
  loading: Boolean = false;
  error: any = '';

  constructor ( private _auth: AuthService, 
    private _router: Router,
    private cdr: ChangeDetectorRef,
    private notify: NotificationService
   ) {}

  ngOnInit(): void {}


matchPasswords( u_password: string, m_password: string ): boolean {
  return u_password === m_password;
}

  onSubmit() {
    this.loading = true;
    this.error = '';
    if (!this.username || !this.f_name || !this.l_name || !this.email || !this.u_password) {
      this.notify.showError('Please fill out all Forms, and Try again')
      return;
    }
    if (!this.matchPasswords(this.u_password, this.m_password)) {
      this.notify.showError('The passwords do not match. Please try again')
      return;
    }
    else {
      this._auth.register({ username: this.username, f_name: this.f_name, l_name: this.l_name, email: this.email, u_password: this.u_password }).
      subscribe(
        response => {
          this.loading = false;
          this._router.navigate(['/']);
          this.notify.showSuccess('Register  Sucessful ')
          this.cdr.detectChanges();  
        },
        (err) => {
          console.log(err)
        }
      )
    }
  }

  canSubmit(): boolean {
    return this.email.length > 0 && this.u_password.length > 0;
  }
}
