import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginForm } from '../types/LoginForm';

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
        alert('Yeahhh login success.');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Credentials do not match our record.');
      })
      .finally(() => this.isLoading = false);
  }

  register() {

  }
}
