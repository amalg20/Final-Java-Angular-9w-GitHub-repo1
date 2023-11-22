import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {

        console.log("login successful");

        localStorage.removeItem("userId");
        localStorage.setItem("currUserId", data.password);

        localStorage.setItem("currUsername", data.username);

        //  this.router.navigate(["/"]);
        this.reloadPage();
      },
      error: err => {

        console.log(err, err.status);

        if (err.status === 403) {
          // this.externalErrorMsg = "Wrong username/password";

         this.reloadPage();

        }
        }
      });
  }


  reloadPage(): void {
    this.router.navigate(['/add']);
  }
}
