export class Location {

    datasetid: string = '';
    fields: any;
    geometry: any;
    record_timestamp: string;
    recordid: string;

    constructor(j: any) {
        this.datasetid = j.datasetid;
        this.fields = j.fields;
        this.geometry = j.geometry;
        this.record_timestamp = j.record_timestamp;
        this.recordid = j.recordid;
      }
}