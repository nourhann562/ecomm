import { Product } from './../../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enviroment } from '../../../base/Enviroment';
import { Observable } from 'rxjs';
import { ProductRes} from '../../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }
  getAllProducts():Observable<ProductRes>
  {
   return this._HttpClient.get<ProductRes>(`${Enviroment.baseUrl}/api/v1/products`)
  }
  getProductById(productId:string):Observable<{data:Product}>
  {
    return this._HttpClient.get<{data:Product}>(`${Enviroment.baseUrl}/api/v1/products/${{productId}}`)
  }
}
