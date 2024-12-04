import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-customer-page',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-customer-page.component.html',
  styleUrl: './add-customer-page.component.css'
})
export class AddCustomerPageComponent {
      public customer:any={
        name:"",
        city:"",
        contact:""
      }

      constructor(private http:HttpClient){}


      public addCustomer(){
        this.http.post("http://localhost:8080/customer/add-customer",this.customer).subscribe((data)=>{
          alert("Customer Added!");
          // this.alertLoginSuccessful();
        })
      }
}
