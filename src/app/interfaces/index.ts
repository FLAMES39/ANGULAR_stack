import { Observable } from "rxjs"

export interface product{
    id:number,
    name:string,
    image:string,
    description:string,
    price:number
  }
  
  export interface movie{
    category: string
    id:string,
    name:string,
    image:string,
    price:number
  }
  export interface CanComponentDeactivate{
    canDeactivate:()=> boolean | Observable<boolean > | Promise<boolean>; 
   
    
  }