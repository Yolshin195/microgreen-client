import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.createForm();

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }


  createForm(): FormGroup {
    return this.formBuilder.group({
      username: [''],
      email: [''],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      agree: ['', Validators.required]
    });
  }

  onSubmit() {
    this.userService.registre(this.form.value).subscribe(user => {
      console.log(user);
    });
  }

}
