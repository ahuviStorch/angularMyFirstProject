import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';

export interface test{
  subject : string;
  mark : number;

}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
title = "header title";
userId : String = '';
isAgreed : boolean = false;
isLoggedIn : boolean = false;
onLogin(){
  this.isLoggedIn = true;
}
subjects : test[]=[{
  subject : "math",
  mark : 98
},  {subject : "english",
  mark : 56
},{
  subject : "grammar",
  mark : 83
}];

// מחשב את ממוצע הציונים באופן דינמי
get averageMark(): number {
  if (this.subjects.length === 0) return 0;
  
  const totalSum = this.subjects.reduce((sum, item) => sum + item.mark, 0);
  return totalSum / this.subjects.length;
}
}
