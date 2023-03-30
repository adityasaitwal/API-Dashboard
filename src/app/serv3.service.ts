import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Serv3Service {

  apiurl = "http://localhost:3000/posts";
  posturl = "http://localhost:3000/emp";

  constructor(private http: HttpClient) {


  }

  //to bind data into the table using the json-server 

  getData() {

    return this.http.get(this.posturl)

  }

  //to bind data into the table using the reactive form

  postData(Data: any) {

    return this.http.post(this.posturl, Data)

  }

  //to delete entries of table using id

  delete(id: number) {

    return this.http.delete(`${this.posturl}/${id}`)
  }

  //to patch data of table in the reactive form using id

  getbyData(id: number) {

    return this.http.get(`${this.posturl}/${id}`)

  }

  //to update data of table by using reactive form and id

  updatedata(id: number, data: any) {

    return this.http.put(`${this.posturl}/${id}`, data)

  }

}