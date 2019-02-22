import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mini-login',
  templateUrl: './mini-login.component.html',
  styleUrls: ['./mini-login.component.css']
})
export class MiniLoginComponent {

  rForm: FormGroup;
  post:any;
  name:string = '';

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],    
      'validate' : ''
    });
   }

addPost(post) {
    this.name = post.name;
  }

}
