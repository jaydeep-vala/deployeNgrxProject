import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  url="http://localhost:3000/posts";
  constructor(private http:HttpClient) { }

  getData(){
    return{  
      name:"jaydip vala",
      age:20,
      id:101,
    }
  }
  ApiDemo()
  {
    return this.http.get(this.url)
  }
  inserRecord(data:any){
    return this.http.post(this.url,data);
  }
}

 /// /