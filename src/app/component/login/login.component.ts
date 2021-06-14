import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.createForm();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required],
      isSave: ['']
    });
  }

  submit() {

  }
}
