export interface Product{
  id:number;
  name:string;
  price:number;
  image:string;
  category?:string;
  desc?:string;
}

export interface ProductItem{
  product : Product;
  qty:number;
}