import { Component } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(public productService: ProductService, private router:Router) { }

  product: Product = this.productService.findProductByIndex(this.productService.index);

  delete(){
    this.productService.deleteProduct(this.productService.index);
    this.router.navigate(["/show"]);
  }

  cancelDel(){
    this.productService.index = -1;
    this.router.navigate(["/show"]);
  }
}
