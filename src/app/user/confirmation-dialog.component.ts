// confirmation-dialog.component.ts

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h1 mat-dialog-title>Confirmation</h1>
    <div mat-dialog-content>Are you sure?</div>
    <div mat-dialog-actions>
      <button mat-button (click)="dialogRef.close(true)">Yes</button>
      <button mat-button (click)="dialogRef.close(false)">No</button>
    </div>
  `,
  styleUrls: ['./confirmation-dialog.component.css'],
})
export class ConfirmationDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent, boolean>) {}
}
