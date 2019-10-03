import { Routes } from '@angular/router';

import { ViewbooksComponent } from '../viewbooks/viewbooks.component';
import { AddbooksComponent } from '../addbooks/addbooks.component';
import { SearchbooksComponent } from '../searchbooks/searchbooks.component';

export const routes: Routes = [
    { path: 'viewbooks',  component: ViewbooksComponent },
    { path: 'addbooks',     component: AddbooksComponent },
    { path: 'searchbooks',     component: SearchbooksComponent },
    { path: '', redirectTo: '/viewbooks', pathMatch: 'full'}
];
