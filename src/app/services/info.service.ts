import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/user_data";
  getDataFromApi(){
    return this.http.get(this.url)
  }
  AddDataToApi(data:any){
    return this.http.post(this.url,data)
  }
  getUserDataFromApi(id:any){
    return this.http.get(`${this.url}/${id}`);
  }
  UpdatedatainApi(id :any,data:any){
return this.http.put(`${this.url}/${id}`,data);
  }
}
