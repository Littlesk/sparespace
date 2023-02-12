import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular';

  constructor(protected route: ActivatedRoute,
    protected router: Router,){

    }
  ngOnInit(){
  }

  searchResults() {
    //navigation to search results page
    this.router.navigate(['/searchResults'] );
  }

}
