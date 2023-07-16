import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private isLogin=false
  constructor() { }
  login(){
    this.isLogin=true
  }
  logOut(){
    this.isLogin=false
  }
  isAuthenticated(){
    const promise= new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve (this.isLogin)
      },200)
    })
    return promise
  }
  getStatus(){
    return this.isLogin
  }
}  
