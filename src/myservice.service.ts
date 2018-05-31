import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:Http) { }
  getData() {
    return this.http.get("https://api.myglamapp.pl/api/categories?language=EN")

  }
}
