import { Routes, RouterModule } from '@angular/router';


import { CsvuploadComponent} from './csvupload/csvupload.component';


export const appRoutes: Routes = [
    { 
        path: 'csvupload', 
        component: CsvuploadComponent,
    },
    { 
        path: '', 
        component: CsvuploadComponent, 
    }
];
