import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your perfect banking partner"
  account="Please enter ur account number"
  
  loginForm= this.fb.group({
    
    pswd:['',[Validators.required,Validators.pattern('[0-9]*')]],
    acno:['',[Validators.required,Validators.pattern('[a-zA-Z0-9$]*')]]
  })

constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
//user defined function

acnochange(event:any)
{
  this.loginForm.value.acno=event.target.value
console.log(this.loginForm.value.acno);

}
pwdchange(event:any)
{
  this.loginForm.value.pswd=event.target.value
console.log(this.loginForm.value.pswd);
}
login()
{
 var acno=this.loginForm.value.acno
 var pswd=this.loginForm.value.pswd
 if(this.loginForm.valid)
 {
 const result=this.ds.login(acno,pswd)
if(result==true)
{
  alert("Login successful")
  this.router.navigateByUrl("dashboard")
 
}
}
else
{
  alert("Invalid Form")
}
}
}