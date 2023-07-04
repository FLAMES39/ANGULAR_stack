import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent {
  productService!:ProductService
  constructor(){
    this.productService= new ProductService()
    this.getAllProducts()
  }
  getAllProducts(){
    console.log(this.productService.getProduct());
    
  }
}
