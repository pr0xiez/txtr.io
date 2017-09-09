import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from "@angular/material";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(public snackBar: MdSnackBar,
              private formBuilder: FormBuilder,
              private authService: AuthService) { }
              
  loginForm: FormGroup


  ngOnInit() {
    this.buildForm()
}

// openForgotPasswordDialog() {
//     this.dialog.open(ForgotPasswordComponent, {
//         height: '250px',
//         width: '600px'
//     })
// }

buildForm() {
    this.loginForm = this.formBuilder.group({
        email: '',
        password: ''
    })
}

openSnackBar(message: string, extraClasses?: string[], action?: string) {
    this.snackBar.open(message, action, {
        duration: 3000,
        extraClasses: extraClasses
    })
}

submit(loginForm) {
    const userCredentials = { //todo add interface
        email: loginForm.controls.email.value,
        password: loginForm.controls.password.value
    }

    this.authService.login(userCredentials)
       .subscribe(res => this.onNext(res), this.onError(), this.onComplete())
}

onNext(x) { // called every time data is emitted from Observable
    console.log(x)
}

onError() {
    return () => {
        this.openSnackBar('Failed to Login', ['errorSnackBar'])
    }
}

onComplete() { // called after final onNext call, successful completion
    return () => {
        this.openSnackBar('Successfully Logged In!', ['successSnackBar'])
        //this.router.navigate(['callcenter/dashboard'])
    }
}
}