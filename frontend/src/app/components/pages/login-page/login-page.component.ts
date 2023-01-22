import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router, RoutesRecognized} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  constructor(private formBuilder: FormBuilder, private userService: UserService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl; //latest value
  }

  get fc(){
    return this.loginForm.controls;
  }

  get getToken(){
    return this.userService.user.token;
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;
    this.userService.login({username: this.fc.username.value,
      password: this.fc.password.value,
      token: this.getToken}).subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
    });
  }
}
