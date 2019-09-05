import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partenaire } from './partenaire/partenaire';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  private UrlPartenaires = "http://127.0.0.1:8000/listeruser";

  constructor(private http:HttpClient) { }
getPartenaires():Observable<Partenaire[]>{
  return this.http.get<Partenaire[]>(this.UrlPartenaires)

}

  loggedIn(){
    return !!localStorage.getItem('token')    
  }
}
