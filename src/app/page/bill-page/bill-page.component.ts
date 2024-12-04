import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bill-page',
  imports: [FormsModule,CommonModule],
  templateUrl: './bill-page.component.html',
  styleUrl: './bill-page.component.css'
})
export class BillPageComponent {

}
