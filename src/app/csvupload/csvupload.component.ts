import { Component, OnInit, OnDestroy,ViewChild } from "@angular/core";
import { Router }                       from "@angular/router";
import { FileUtil }                     from './file.util';
import { Constants }                    from './csvupload.constants';


@Component({
  selector: 'app-csvupload',
  templateUrl: './csvupload.component.html',
  styleUrls: ['./csvupload.component.css']
})


export class CsvuploadComponent implements OnInit, OnDestroy {
  
  public data : any
 
  ngOnInit() {}
   
  @ViewChild('fileImportInput')
  fileImportInput: any;
 
  public csvRecords: any[] = [];
 
  constructor(private _router: Router,
    private _fileUtil: FileUtil
  ) { }
 
  // METHOD CALLED WHEN CSV FILE IS IMPORTED
  fileChangeListener($event): void {
    var files = $event.srcElement.files;
 
    if(Constants.validateHeaderAndRecordLengthFlag){
      if(!this._fileUtil.isCSVFile(files[0])){
        alert("Please import valid .csv file.");
        this.fileReset();
      }
    }
 
    var input = $event.target;
    var reader = new FileReader();
    reader.readAsText(input.files[0]);
 
    reader.onload = (data) => {
      let  csvData = reader.result;
      let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
      let headers = csvRecordsArray[0].split(',');
      
      var headerLength = -1;
      if(Constants.isHeaderPresentFlag){
        let headersRow = this._fileUtil.getHeaderArray(csvRecordsArray, Constants.tokenDelimeter);
        headerLength = headersRow.length; 
      }
       
      this.csvRecords = this._fileUtil.getDataRecordsArrayFromCSVFile(csvRecordsArray, 
          headerLength, Constants.validateHeaderAndRecordLengthFlag, Constants.tokenDelimeter);
              
      if(this.csvRecords == null){
          this.fileReset();
      }    
    }
 
    reader.onerror = function () {
      alert('Unable to read ' + input.files[0]);
    };
  };
 
  fileReset(){
    this.fileImportInput.nativeElement.value = "";
    this.csvRecords = [];
  }
  ngOnDestroy(): void {
   
  }
 
}