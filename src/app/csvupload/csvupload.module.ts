import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { Routes, RouterModule }             from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }                       from '@angular/http';
import { CsvuploadComponent }                    from './csvupload.component';
import { CsvuploadRoutes }                       from './csvupload.routes';

import { FileUtil }                         from './file.util';
import { Constants }                        from './csvupload.constants';


@NgModule({
   
    imports: [ 
        CommonModule,
        CsvuploadRoutes,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpModule
    ],

    // put all your components / directives / pipes here
    declarations:[
        CsvuploadComponent
    ],

    // put all your services here
    providers: [
        FileUtil,
        Constants
    ],
})

export class CsvuploadModule{}