import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CsvuploadComponent } from './csvupload.component';

const routes: Routes = [
    { 
        path: '',  
        component: CsvuploadComponent
    }
];
export const CsvuploadRoutes: ModuleWithProviders = RouterModule.forChild(routes);