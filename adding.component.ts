import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import{Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {
  saveGroup:FormGroup;
  name: string;
  language: string;
  genre: string;
  
  constructor(public router:Router,private fb:FormBuilder,private http: HttpClient) { 
  this.saveGroup = this.fb.group({
     name: [''],
     language: [''],
     genre: ['']
     
  })
  }
  ngOnInit() {
    
  }
  sav(value) {
    let name= this.saveGroup.get("name").value
    let language = this.saveGroup.get("language").value
    let genre= this.saveGroup.get("genre").value
    let body = {
      "name": name,
      "language": language,
      "genre": genre
    }
    console.log(body)
    if (this.name==""&&this.language==""&&this.genre==""){
    return this.http.post("https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies ", body).subscribe(data => {
      console.log(data)
       this.router.navigateByUrl("movielist")
    })
  }
  else{
    console.log("")
  }
}
  
//       cancal(){
//        this.save.pop();
  
//  }
  

}
