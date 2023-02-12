import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Loader } from '@googlemaps/js-api-loader';
import { SearchService } from 'src/app/search.service'
import { Field } from 'src/app/field';
import { Location } from 'src/app/location';

export interface DialogData {
  toTimeSlot: string,
  fromTimeSlot: string,
}

@Component({
  selector: 'confirmation',
  templateUrl: 'confirmation.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog, {}>,
    public router: Router,
    private dialog: MatDialog,
  ) {}

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close();
    this.router.navigate(['']);
  }
}


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit{

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass ='custom-dialog-container';

    this.dialog.open(DialogOverviewExampleDialog, dialogConfig);
}

// date information
dateRange = new FormGroup({
  start: new FormControl(),
  end: new FormControl()
});

filters = this.formBuilder.group({
  purpose: '',
  toTimeSlot: '',
  fromTimeSlot: '',
  range: this.dateRange,
  price: '',
  location: ''
});

  private map: google.maps.Map;
  public results: any = [];
  public loc: any = [];
  public price = [5.39,7.16,5.78,13.54,3.91,10.9,9.41,14.96,3.47,13.62,6.08,2.95,9.89,6.7,1.9,8.52,4.78,9.05,7.35,1.06];
  public idx: any = [];
  constructor(private formBuilder: FormBuilder, private searchService: SearchService, public dialog: MatDialog) {}
  public coord: any = [];
  

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getIdx(){
    for (let i = 0; i < 20; i++){
      this.idx[i] = this.getRandomInt(19);
    }
  }

  ngOnInit(): void {
    this.getIdx();
    //load google maps onto browser
    let loader = new Loader({
      apiKey: "AIzaSyCfvMwRgputX5vlwOhv3HR5csIx_WM71-I",
    });
    
    loader.load().then(() => {
      console.log("loaded map")

      // give location coordinates
      const location = [{
        lat: 35.844108119305595,
        lng: -79.03714650842645,
      }, {
        lat: 35.7115038237679,
        lng: -79.07932782125309
      }, {
        lat: 35.74738866215493,
        lng: -78.83219344498693
      }];

      const elm = document.getElementById("map")!;
      
      this.map = new google.maps.Map(elm, {
        center: location[0],
        zoom: 10
      });
      
    });
  }

  onSubmit(){
    console.log("value", this.filters.controls.purpose.value);
    this.results.length = 0;
    this.loc.length = 0;
    let purpose = this.filters.controls.purpose.value ?? '';//.controls.purpose ?? '';
    let zip = this.filters.controls.location.value ?? '';
    // this.searchService.filterLocations(this.filters.controls.purpose.value ?? '', "something2").subscribe(data =>{

    // });
    // console.log(this.searchService.filterLocations(this.filters.controls.purpose.value ?? '', "something2"));
    this.searchService.getLocations().subscribe((data: Location[]) => {
      // console.log("data", data);
      let count = 0;
      for (var n in data) {
        // console.log("data", data[n]);
        var elm: Field = data[n].fields;
        // console.log("elm", elm.landclass.toLowerCase().includes(purpose));
        if (elm.landclass.toLowerCase().includes(purpose) && elm.owneradd2?.includes(zip)){
          this.results[count] = data[n];
          this.loc[count] = this.results[count].fields;
          console.log("resultcheck", elm.owneradd2?.includes("27519"));
          count++;
        } 
      }
      count = 0;
      console.log("results", this.loc);
      for (let c = 0; c < this.results.length; c++) {
        console.log("location", this.loc[c].geo_point_2d);
        this.coord[c] = {
          lat: this.loc[c].geo_point_2d[0],
          lng: this.loc[c].geo_point_2d[1]};
          
      }
      console.log(this.coord);
      const elment = document.getElementById("map")!;
      this.map = new google.maps.Map(elment, {
        center: this.coord[0],
        zoom: 10
      });

      // marker
      var markers=[];
      // marker
        for (let i = 0; i < this.coord.length; i++) {
          markers[i] = new google.maps.Marker({
            position: this.coord[i],
            map: this.map
          });
        }
  });
}

}
