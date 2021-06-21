import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { User } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.createForm();

  constructor(private formBuilder: FormBuilder, private appService: AppService, private router: Router) { }

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
    this.appService.authenticate({username: this.form.value.phone, password: this.form.value.password}, (error:boolean, user: User) => {
      if (error) {
        console.log("Error!");
      } else {
        console.log('Login.components submit: ', user);
        this.router.navigateByUrl("/");
      }
    });
  }
}
