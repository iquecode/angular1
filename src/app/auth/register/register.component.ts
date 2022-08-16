import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/RegisterForm';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }


  form: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  

  ngOnInit(): void {
  }

  isLoading() {
    return this.authService.isLoading;
  }

  submit() {
    this.authService.register(this.form);  
  }

}
