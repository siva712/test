import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import{Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  public id="5d72394bb4ff990008dee8f7";
  public arry2;


  constructor(public router:Router,private fb:FormBuilder,private http: HttpClient) { }

  ngOnInit() {
  
   this.http.get("https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/"+this.id).subscribe(data => {
      this.arry2=data;
       
    })
  }
  add(value){
    this.router.navigateByUrl("saveGroup")
    

  }

  remove(){
    this.arry2.pop();

  }

}


