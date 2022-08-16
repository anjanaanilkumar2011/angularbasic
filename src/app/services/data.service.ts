import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentuser:any
  currentAcno:any
  userDetails : any={
    1000:{acno:1000,username:'Anjana',password:1000,balance:5000, transaction:[]},
    1001:{acno:1001,username:'Suneesh',password:1001,balance:5000,transaction:[]},
    1002:{acno:1002,username:'Rishita',password:1002,balance:5000,transaction:[]}
  
  }

  constructor() { 
    this.getDetails()
  }
//saveDetails()- to store data in local storage
saveDetails()
{
  //database storage
  if(this.userDetails)
  {
    localStorage.setItem('database',JSON.stringify(this.userDetails))
  }
  if(this.currentAcno)
  {
    localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))

  }
  if(this.currentuser)
  {
    localStorage.setItem('currentUser',JSON.stringify(this.currentuser))

  }
}
//getdetails()-to get data from local storage
getDetails()
{
  //get database
  if(localStorage.getItem('database'))
  {
    this.userDetails=JSON.parse(localStorage.getItem('database') || '')
  }
  //get currentacno
  if(localStorage.getItem('currentAcno'))
  {
    this.currentAcno=JSON.parse(localStorage.getItem('currentAcno') || '')
  }
  //get currentuser
  if(localStorage.getItem('currentUser'))
  {
    this.currentuser=JSON.parse(localStorage.getItem('currentUser') || '')
  }
}
  //register
  register(acno:any,username:any,password:any)
  {
    let userDetails=this.userDetails
    if(acno in userDetails)
    {
      return false
    }
    else{
      userDetails[acno]={
        acno,
        username,
        password,
        balance :0,
        transaction:[]
      }
      this.saveDetails()
console.log(userDetails);

      return true
    }
  }
  //login
  login(acno:any,pswd:any)
{
 
 
 let userDetails=this.userDetails 
 if(acno in userDetails)
 {
  if(pswd==userDetails[acno].password)
  {
    this.currentuser=userDetails[acno]. username
  this.currentAcno=acno
  this.saveDetails()
 return true
 
  }
  else
  {
    alert("Password incorrect")
    return false
  }
}
 else{
  alert("Account does not exist")
  return false
 }
}
//deposit
deposit(acno:any,pswd:any,amt:any)
{
  let userDetails=this.userDetails 
  var amount=parseInt(amt)
  if(acno in userDetails)
  {
if(pswd==userDetails[acno].password)
{
  userDetails[acno].balance+=amount
  userDetails[acno]['transaction'].push({
    type:'credit' , 
      amount
  })
  this.saveDetails()
  console.log(userDetails);
  
  return userDetails[acno].balance
  
}

else{
  alert("Password incorrect")
  return false
}

  }
  else{
    alert("User does not exist")
    return false
  }
}
withdraw(acno:any,pswd:any,amt:any)
{
  let userDetails=this.userDetails 
  var amount=parseInt(amt)
  if(acno in userDetails)
  {
if(pswd==userDetails[acno].password)
{
  if(userDetails[acno].balance>amount)
  {
  userDetails[acno].balance-=amount
  userDetails[acno]['transaction'].push({
    type:'DEBIT' , 
      amount
  })
  this.saveDetails()
  console.log(userDetails);
  
  return userDetails[acno].balance
  
  }
else{
    alert("Insufficient balance to withdraw")
    return false
  }
}
  
else{
  alert("Password incorrect")
  return false
}
  }
else
{
    alert("User does not exist")
    return false
  }
}
getTransaction(acno:any)
{
  return this.userDetails[acno].transaction
}
}



