import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-confirmation-box',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirmation-box.component.html',
  styleUrl: './confirmation-box.component.css'
})
export class ConfirmationBoxComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
