import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(public productService: ProductService, private router:Router) { }

  product: Product = this.productService.findProductByIndex(this.productService.index);


  edit(){
    this.productService.editProduct(this.product);
    console.log(this.product)
    this.router.navigate(["/show"]);
  }

  ngOnInit(): void {
  }
}
