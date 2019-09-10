import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import{Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup:FormGroup;
  constructor(  public router:Router,private fb:FormBuilder,private http: HttpClient) { 
    this.signup = this.fb.group({
      name: [''],
      password: [''],
      confirmpassword: ['']
    })
  
  }
  
  ngOnInit() {

  }

  sig(value) {
    let name= this.signup.get("name").value
    let password= this.signup.get("password").value
    let confirmpassword= this.signup.get("confirmpassword").value
    let body = {
      "name": name,
      "password": password,
      "confirmpassword": confirmpassword
    }
    console.log(body)
    if (password==confirmpassword){
    return this.http.post("https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users", body).subscribe(data => {
      console.log(data)
       this.router.navigate(["/login"])
    })
  }
  else{
    console.log("password missmatch")
  }
  }
 }




 






