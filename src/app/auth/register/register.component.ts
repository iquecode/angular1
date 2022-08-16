import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/RegisterForm';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  isLoading: boolean = false;

  form: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  passwordMatched: boolean = true;

  ngOnInit(): void {
  }

  submit() {
    //alert(JSON.stringify(this.form));
    if (this.isLoading) return;
    
    if (this.form.password !== this.form.confirmPassword ) {
      this.passwordMatched = false;
      return;
    }

    this.isLoading = true;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => this.isLoading = false);
  }

}
