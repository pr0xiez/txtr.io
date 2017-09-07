import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from "@angular/material";
import { AuthService } from "../core/services/auth.service";

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

  ngOnInit() { }
}