import { Routes } from '@angular/router';
import { AddCustomerPageComponent } from './page/add-customer-page/add-customer-page.component';
import { ManageCustomerPageComponent } from './page/manage-customer-page/manage-customer-page.component';
import { AddItemPageComponent } from './page/add-item-page/add-item-page.component';
import { ManageItemPageComponent } from './page/manage-item-page/manage-item-page.component';
import { AddRentalPageComponent } from './page/add-rental-page/add-rental-page.component';
import { ManageRentalPageComponent } from './page/manage-rental-page/manage-rental-page.component';
import { BillPageComponent } from './page/bill-page/bill-page.component';

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
    },
    {
        path:"app-add-rental-page",
        component:AddRentalPageComponent
    },
    {
        path:"app-manage-rental-page",
        component:ManageRentalPageComponent
    },
    {
        path:"app-bill-page",
        component:BillPageComponent
    }
];
