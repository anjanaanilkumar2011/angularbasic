import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

//register model
registerForm= this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9]*')]],
  acno:['',[Validators.required,Validators.pattern('[a-zA-Z0-9$]*')]]
})
  constructor(private ds: DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register()
  {
    this.registerForm.get
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd
    if(this.registerForm.valid)
    {
   const result= this.ds.register(acno,uname,pswd)
   if(result==true)
   {
    alert("Registration successful")
    this.router.navigateByUrl('')
   }
   else
   {
   alert("User already exist..Please Login ")
   this.router.navigateByUrl('')
   }
  }
  else{
    alert("Invalid form.")
  }
  }

}
