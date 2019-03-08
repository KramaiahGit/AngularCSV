import { Injectable }       from '@angular/core';

@Injectable()
export class FileUtil {

    constructor() {}

    isCSVFile(file) {
        return file.name.endsWith(".csv");
    }

    getHeaderArray(csvRecordsArr, tokenDelimeter) {        
        let headers = csvRecordsArr[0].split(tokenDelimeter);
        var headerArray = [];
        for (let j = 0; j < headers.length; j++) {
            headerArray.push(headers[j]);
        }
        return headerArray;
    }

    validateHeaders(origHeaders, fileHeaaders) {
        if (origHeaders.length != fileHeaaders.length) {
            return false;
        }

        var fileHeaderMatchFlag = true;
        for (let j = 0; j < origHeaders.length; j++) {
            if (origHeaders[j] != fileHeaaders[j]) {
                fileHeaderMatchFlag = false;
                break;
            }
        }
        return fileHeaderMatchFlag;
    }

    getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength, 
        validateHeaderAndRecordLengthFlag, tokenDelimeter) {
        var dataArr = []

        for (let i = 0; i < csvRecordsArray.length; i++) {
            let data = csvRecordsArray[i].split(tokenDelimeter);
            
            if(validateHeaderAndRecordLengthFlag && data.length != headerLength){
                if(data==""){
                    alert("Extra blank line is present at line number "+i+", please remove it.");
                    return null;
                }else{
                    alert("Record at line number "+i+" contain "+data.length+" tokens, and is not matching with header length of :"+headerLength);
                    return null;
                }
            }

            let csvRecord: CSVRecord = new CSVRecord();
            
            for (let j = 0; j < data.length; j++) {
            switch(j) { 
                case 0: { 
                   csvRecord.firstName = data[0].slice(1,-1);
                   break; 
                } 
                case 1: { 
                   csvRecord.surName = data[1].slice(1,-1);
                   break; 
                } 
                case 2: {
                    if (i==0) csvRecord.issueCount = data[2].slice(1,-1);
                    else csvRecord.issueCount = data[2];
                   break;    
                } 
                case 3: { 
                    if (i==0) csvRecord.dateofBirth = data[3].slice(1,-1);
                    else  csvRecord.dateofBirth = data[3].slice(1,-10);
                    break; 
                }  
                default: { 
                   break;              
                } 
             }
                
               
            }

            dataArr.push(csvRecord);
          
        }   
        return dataArr;
    }

}

export class CSVRecord {
    public firstName: string;
    public surName: string;
    public issueCount: any;
    public dateofBirth: any;
     constructor() {
  
    }
  }