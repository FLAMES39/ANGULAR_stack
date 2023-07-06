import { Injectable } from '@angular/core';
import { product } from '../interfaces';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products:product[] =[
    {
      id:1,
      name:'mouse',
      image:'https://media.istockphoto.com/id/492696926/photo/wood-mouse-on-root-of-tree.jpg?s=2048x2048&w=is&k=20&c=7c_JndsLR7YK90rCiG_l7j444fE8bC1O7NL112c7sDY=',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      price:3000

    },
    {
      id:2,
      name:'keyboard',
      image:'https://images.unsplash.com/photo-1612731427528-9980b4af1b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      price:4000

    }
  ]
  getProduct(){
    return this.products
  }
  getOneProduct(id:number){
    let index=this.products.findIndex(product=> product.id===id)
    return this.products[index]
  }
  addProduct(newProduct:product){
    this.products.push(newProduct)
  }
  updateProduct(updatedProduct:product){
    let index=this.products.findIndex(product=> product.id===updatedProduct.id)
    this.products[index]=updatedProduct
  }
  deleteProduct(id:number){
    let index=this.products.findIndex(product=> product.id === id)
    this.products.splice(index,1)

  }
}
