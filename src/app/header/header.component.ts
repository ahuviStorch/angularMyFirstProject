import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, NgIf],
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
}
