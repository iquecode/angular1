import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/LoginForm';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  

  form: LoginForm = {
    email: '',
    password: '',
  }

  ngOnInit(): void {
  }

  submit() {

    

    this.authService.login(this.form);

    
  }

  isLoading() {
    return this.authService.isLoading;
  }

}
