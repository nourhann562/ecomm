import { AuthService } from './../../../shared/services/auth/auth.service';

import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
// submitRegister() {
// throw new Error('Method not implemented.');
// }
  isLoding:boolean=false;
  errMsg!:string
registerForm:FormGroup =new FormGroup({
name : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
email : new FormControl(null,[Validators.required,Validators.email]),
phone : new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
password : new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z 0-9]{8,}$/)]),
rePassword : new FormControl(null,[Validators.required]),
},this.checkRepasswordMatch)

 constructor(private _AuthService:AuthService,private _Router:Router){

 }
 checkRepasswordMatch(g:AbstractControl)
 {
  if(g.get('password')?.value === g.get('rePassword')?.value){
    return null;
  }
  else{
    g.get('rePassword')?.setErrors({mismatch:true})
    return {mismatch:true}; 
  }
 }

submitRegister(){
 
  if(this.registerForm.valid){

    this.isLoding=true;
    this._AuthService.signUp(this.registerForm.value).subscribe({
      next:(res) => {
        this.isLoding=false;
     console.log(res);
     this._Router.navigate(['/login'])
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