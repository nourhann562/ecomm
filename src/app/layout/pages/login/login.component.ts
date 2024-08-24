import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoding:boolean=false;
  errMsg!:string
loginForm:FormGroup =new FormGroup({
email : new FormControl(null,[Validators.required,Validators.email]),
password : new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z 0-9]{8,}$/)]),
})

 constructor(private _AuthService:AuthService,private _Router:Router){

 }
 

submitLogin(){
 
  if(this.loginForm.valid){

    this.isLoding=true;
    this._AuthService.signIn(this.loginForm.value).subscribe({
      next:(res) => {
        this.isLoding=false;
     console.log(res);
     localStorage.setItem('userToken',res.token);
     this._AuthService.decodeUserData();
     this._Router.navigate(['/home'])
      },
      error:(err) =>{
        this.isLoding=false;
      console.log(err);
      this.errMsg=err.error.message
      }
  });
}
}
}

