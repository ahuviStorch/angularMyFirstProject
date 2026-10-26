import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
  email: string = '';
  showTooltip: boolean = false;
  capturedEmail: string = '';
  
  @Output() emailSubmitted = new EventEmitter<string>();

  // פונקציה לשמירת המייל והפצתו החוצה
  submitEmail() {
    if (this.email) {
      this.capturedEmail = this.email;
      this.emailSubmitted.emit(this.capturedEmail);
    }
  }

  // פונקציה להוספת סיומת gmail
  appendGmail() {
    if (this.email && !this.email.includes('@gmail.com')) {
      this.email += '@gmail.com';
    }
    this.submitEmail();
  }
}