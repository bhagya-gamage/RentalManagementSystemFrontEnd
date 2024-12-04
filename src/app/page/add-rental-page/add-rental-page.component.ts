import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-rental-page',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-rental-page.component.html',
  styleUrl: './add-rental-page.component.css'
})
export class AddRentalPageComponent {

  public rental:any={
    rentalDate:"",
    returnDate:"",
    dueDate:"",
    totalCost:""
  }

  constructor(private http:HttpClient){}


  public addRental(){
    this.http.post("http://localhost:8080/rental/add-rental",this.rental).subscribe((data)=>{
      alert("Rental Added!");
      // this.alertLoginSuccessful();
    })
  }

}
