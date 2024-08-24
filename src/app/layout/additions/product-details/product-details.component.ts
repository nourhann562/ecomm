import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/products/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

 constructor(private _ProductsService:ProductsService){}
 ngOnInit(): void {
   this.getProductById();
 }
 getProductById(){
 this._ProductsService.getProductById('6428de2adc1175abc65ca05b').subscribe({
  next : res =>{
    console.log(res);
  }
 })
 }
}



