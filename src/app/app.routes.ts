import { Routes } from '@angular/router';
import { AddCustomerPageComponent } from './page/add-customer-page/add-customer-page.component';
import { ManageCustomerPageComponent } from './page/manage-customer-page/manage-customer-page.component';

export const routes: Routes = [
    {
        path:"app-add-customer-page",
        component:AddCustomerPageComponent
    },
    {
        path:"app-manage-customer-page",
        component:ManageCustomerPageComponent
    }
];
