import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/products/products.service';
import { Product } from '../../../shared/interfaces/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  productList!:Product[];
  constructor(private _ProductsServices:ProductsService){}
  ngOnInit(): void {
    if(typeof localStorage !='undefined')
    localStorage.setItem('currentPage','/home');
  this.getAllProducts();
  }
getAllProducts(){
  let word = 'web design and development';
  console.log(word.split(' ').splice(0,2).join(' '));
  this._ProductsServices.getAllProducts().subscribe({
    next:res =>{
      this.productList=res.data;
      console.log(this.productList);
    },
    error:err =>{
      console.log(err);
      }
  })
}
}
