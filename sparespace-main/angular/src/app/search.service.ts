import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from 'src/app/location';
import { Field } from 'src/app/field';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnInit {

  private jsonURL = '../assets/data/search.json';
  constructor(private http: HttpClient) {
 }
  ngOnInit(): void {
   
  }

  public getLocations(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

}
