import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }     from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { appRoutes }  from './app.routes'; 
import { CsvuploadModule } from './csvupload/csvupload.module';
import {AgGridModule} from 'ag-grid-angular/main';
import {CsvuploadComponent} from './csvupload/csvupload.component';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CsvuploadModule,
    AgGridModule,
     AgGridModule.withComponents(
            [CsvuploadComponent]),
    

    RouterModule.forRoot(appRoutes, {
			useHash: true
		})
    
  ],
  
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
