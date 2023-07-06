import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  
  constructor(private productService:ProductService){}
  addProduct(name:string,image:string,description:string,price:string){
    this.productService.addProduct({
      id: Math.floor(Math.random() * 100),
      name,
      image ,
      description,
      price: +price
    })
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id)
  }
}
