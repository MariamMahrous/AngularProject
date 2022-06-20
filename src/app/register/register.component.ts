import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  
  // registerForm : FormGroup
  constructor(private authService: AuthService) { 
// this.registerForm=new FormGroup({
// username:new FormControl(" ",[Validators.required ]),
// email:new FormControl(" ",[Validators.required,Validators.email]),
// password:new FormControl(" ",[Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")])
// }
//   )
}

  // handleForm(){
  //   console.log(this.registerForm);

  // }
  ngOnInit(): void {
  }
  onSubmit(): void {
    const { username, email, password } = this.form;
    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}

