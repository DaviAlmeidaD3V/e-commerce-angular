import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor( private snackBar: MatSnackBar ) { }

  showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['success-snackbar']
    });
  }

  showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['error-snackbar']
    });
  }

  showInfo(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['info-snackbar']
    });
  }

}
