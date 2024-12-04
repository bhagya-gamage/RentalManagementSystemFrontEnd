import { Routes } from '@angular/router';
import { AddCustomerPageComponent } from './page/add-customer-page/add-customer-page.component';
import { ManageCustomerPageComponent } from './page/manage-customer-page/manage-customer-page.component';
import { AddItemPageComponent } from './page/add-item-page/add-item-page.component';
import { ManageItemPageComponent } from './page/manage-item-page/manage-item-page.component';

export const routes: Routes = [
    {
        path:"app-add-customer-page",
        component:AddCustomerPageComponent
    },
    {
        path:"app-manage-customer-page",
        component:ManageCustomerPageComponent
    },
    {
        path:"app-add-item-page",
        component:AddItemPageComponent
    },
    {
        path:"app-manage-item-page",
        component:ManageItemPageComponent
    }
];
