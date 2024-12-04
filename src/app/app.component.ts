import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './comman/nav-bar/nav-bar.component';
import { AddCustomerPageComponent } from './page/add-customer-page/add-customer-page.component';
import { ManageCustomerPageComponent } from './page/manage-customer-page/manage-customer-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBarComponent,AddCustomerPageComponent,ManageCustomerPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RentalManagementSystem';
}
