import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class BookService{
  httpOptions : {headers: HttpHeaders}

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
      "Content-Type":"application/json"
    })
  }
}


  getAllBooks() : Observable<any>{
    return this.http.get("http://localhost:8080/katio/books/getall", this.httpOptions);
  }
}
