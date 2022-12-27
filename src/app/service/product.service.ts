import { Injectable } from '@angular/core';
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  index :number = -1;

  public products: Product[] = [new Product("Ny Phong", "https://i.ibb.co/LzHGr6w/280120405-1055408911720137-8343618904438067534-n-result.jpg", 300, true),
    new Product("Ny Manh", "https://openseauserdata.com/files/02d992a4c7039936aea0bce0ec7a5e1e.jpg", 400, false)];
  constructor() { }

  addProduct(product: Product) : void{
    this.products.push(product);
  }

  findIndexByName(name : string): number{
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name){
        return i;
      }
    }
    return -1;
  }

  findProductByIndex(index : number) : Product{
    return this.products[index];
  }

  showEdit(index : number) :void{
    this.index = index;
  }

  editProduct(product : Product) : void{
    this.products[this.index] = product;
    this.index === -1;
  }

  showDelete(index : number) : void{
    this.index = index;
  }

  deleteProduct(index: number) :void{
    this.products.splice(index,1);
    this.index === -1;
  }
}
