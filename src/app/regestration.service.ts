import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './books';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class RegestrationService {

  constructor(private http:HttpClient) { }
  public valuser(emp:Employee):Observable<any>{
    return this.http.post<any>("http://localhost:8080/login",emp)
  }
  public aduser(emp:Employee):Observable<any>{
    return this.http.post<any>("http://localhost:8080/add",emp)
  }
  public getbok():Observable<any>{
    return this.http.get<any>("http://localhost:8080/submit")
  }
}
