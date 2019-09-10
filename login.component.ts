import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import{Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router,private fb:FormBuilder,private http: HttpClient) { }
    login= this.fb.group({
      name: [''],
      password: [''],
    });

  ngOnInit() {
  }
  loginform(value) {
    let name= this.login.get("name").value
    let password= this.login.get("password").value
    let body = {
      "name": name,
      "pass": password,
    }
    console.log(body)
    if(name&&password)
    return this.http.post("https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate"
      , body).subscribe(data => {
    console.log('data called',data)
    alert('login sucessfully')
    this.router.navigateByUrl("saveGroup")
    

  })
}

}

  

