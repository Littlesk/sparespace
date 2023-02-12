export class Field {

    apaactivity: number;
    apafunction: number;
    apaownership: number;
    apasite: number;
    apastructure: number;
    bldgvalue: number;
    calcacreage: number;
    county: string;
    deedacres: number;
    deedbook: number;
    deedlink: string;
    deedpage: number;
    geo_point_2d: any;
    geo_shape: any;
    landclass: string;
    landsalevalue: number;
    landvalue: number
    lclass: string;
    location: string;
    owner: string;
    owneradd1: string;
    owneradd2: string;
    pin: number;
    pin10: number;
    propertydesc: string;
    realid: number;
    reallink: string;
    shape_starea: number;
    shape_stlength: number;
    streetnumber: number;
    totalsalevalue:number;
    totalstructures: number;
    totalunits: number;

    constructor(j: any) {
        this.apaactivity = j.apaactivity;
        this.apafunction = j.apafunction;
        this.apaownership = j.apaownership;
        this.apasite = j.apasite;
        this.apastructure = j.apastructure;
        this.apaactivity = j.apaactivity;
        this.bldgvalue = j.bldgvalue;
        this.calcacreage = j.calcacreage;
        this.county = j.county;
        this.deedacres = j.deedacres;
        this.deedbook = j.deedbook;
        this.deedlink = j.deedlink;
        this.deedpage = j.deedpage;
        this.geo_point_2d = j.geo_point_2d;
        this.geo_shape = j.geo_shape;
        this.landclass = j.landclass;
        this.landsalevalue = j.landsalevalue;
        this.landvalue = j.landvalue;
        this.lclass = j.lclass;
        this.location = j.location;
        this.owner = j.owner;
        this.owneradd1 = j.owneradd1;
        this.owneradd2 = j.owneradd2;
        this.pin = j.pin;
        this.pin10 = j.pin10;
        this.propertydesc = j.propertydesc;
        this.realid = j.realid;
        this.reallink = j.reallink;
        this.shape_starea = j.shape_starea;
        this.shape_stlength = j.shape_stlength;
        this.streetnumber = j.streetnumber;
        this.totalsalevalue = j.totalsalevalue;
        this.totalstructures = j.totalstructures;
        this.totalunits = j.totalunits;

      }
}