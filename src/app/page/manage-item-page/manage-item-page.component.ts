import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-manage-item-page',
  imports: [FormsModule,CommonModule],
  templateUrl: './manage-item-page.component.html',
  styleUrl: './manage-item-page.component.css'
})
export class ManageItemPageComponent {

  public itemList:any=[];

  constructor(private http:HttpClient){
    this.loadTable();
  }

  loadTable(){
      this.http.get("http://localhost:8080/item/get-all").subscribe(data=>{
        
        this.itemList=data;
        console.log(this.itemList);

      })
  }

  deleteItemById(id:any){
    console.log(id);
    this.http.delete(`http://localhost:8080/item/delete-by-id/${id}`).subscribe(data=>{
      alert("deleted!")
      // this.alertDelete();
      this.loadTable();
      
     })
}

public itemTemp:any={}


updateItem(item:any){
  console.log(item);
  this.itemTemp=item;
}

saveItem(){
  this.http.put("http://localhost:8080/item/update-item ",this.itemTemp).subscribe(data=>{
    console.log(this.itemTemp);
    alert("updated!");
    // this.alertLoginSuccessful();
  })
}

}
