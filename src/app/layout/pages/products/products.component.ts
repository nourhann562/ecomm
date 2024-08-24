import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
    if(typeof localStorage !='undefined')
    localStorage.setItem('currentPage','/products');
  }
}
