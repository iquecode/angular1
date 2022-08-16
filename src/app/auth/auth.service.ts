import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginForm } from '../types/LoginForm';
import { RegisterForm } from '../types/RegisterForm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated: boolean = false;
  isLoading: boolean = false;

  login(form: LoginForm) {
    if (this.isLoading) return;
    
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //alert('Credentials do not match our record.');
        this.isAuthenticated = false;
      })
      .finally(() => this.isLoading = false);
  }

  passwordMatched: boolean = true;
  register(form: RegisterForm) {
    //alert(JSON.stringify(this.form));
    if (this.isLoading) return;
    
    if (form.password !== form.confirmPassword ) {
      this.passwordMatched = false;
      return;
    }

    this.isLoading = true;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => this.isLoading = false);
  }

  
}
