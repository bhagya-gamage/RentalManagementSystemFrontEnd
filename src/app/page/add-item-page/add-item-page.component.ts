import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-add-item-page',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-item-page.component.html',
  styleUrl: './add-item-page.component.css'
})
export class AddItemPageComponent {
  public item:any={
    name:"",
    availability:"",
    rentalPerDay:"",
    finePerDay:""

  }

  constructor(private http:HttpClient){}


  public addItem(){
    this.http.post("http://localhost:8080/item/add-item",this.item).subscribe((data)=>{
      alert("Item Added!");
      // this.alertLoginSuccessful();
    })
  }
}
