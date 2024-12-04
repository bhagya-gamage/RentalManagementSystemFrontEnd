import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-rental-page',
  imports: [FormsModule,CommonModule],
  templateUrl: './manage-rental-page.component.html',
  styleUrl: './manage-rental-page.component.css'
})
export class ManageRentalPageComponent {

  public rentalList:any=[];
  

  constructor(private http:HttpClient){
    this.loadTable();
  }

  loadTable(){
      this.http.get("http://localhost:8080/rental/get-all").subscribe(data=>{
        
        this.rentalList=data;
        console.log(this.rentalList);

      })
  }

  deleteRentalById(id:any){
    console.log(id);
    this.http.delete(`http://localhost:8080/rental/delete-by-id/${id}`).subscribe(data=>{
      alert("deleted!")
      // this.alertDelete();
      this.loadTable();
      
     })
}

public rentalTemp:any={}


updateRental(item:any){
  console.log(item);
  this.rentalTemp=item;
}

saveRental(){
  this.http.put("http://localhost:8080/rental/update-rental",this.rentalTemp ).subscribe(data=>{
    console.log(this.rentalTemp);
    alert("updated!");
    // this.alertLoginSuccessful();
  })
}






}
