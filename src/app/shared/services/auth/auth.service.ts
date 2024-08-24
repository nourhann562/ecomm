

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { loginData, registerData } from '../../interfaces/data';
import { Enviroment } from '../../../base/Enviroment';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { Route, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 userData:BehaviorSubject<any>=new BehaviorSubject(null);


  constructor(private _HttpClient:HttpClient, private _Router:Router,@Inject(PLATFORM_ID) id:object) { 
    if(isPlatformBrowser(id)){
      if(localStorage.getItem('userToken')){
        this.decodeUserData();
        _Router.navigate([localStorage.getItem('currentPage')])
      }
    }
    
  }
  signUp(data:registerData):Observable<any>
{
 return this._HttpClient.post(`${Enviroment.baseUrl}/api/v1/auth/signup`,data)
}
  signIn(data:loginData):Observable<any>
{
 return this._HttpClient.post(`${Enviroment.baseUrl}/api/v1/auth/signin`,data)
}
decodeUserData(){
  const token = JSON.stringify(localStorage.getItem('userToken'));
  const decoded = jwtDecode(token);
  this.userData.next(decoded);
  console.log(this.userData.getValue());
}

logOut(){
  this.userData.next(null);
  this._Router.navigate(['/login'])
}
}