import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../interfaces';

@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit{
  products!:product[]
  constructor(public productService:ProductService){
  }
  ngOnInit(){
    this.products=this.productService.getProduct()
    
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id)
  }
}
