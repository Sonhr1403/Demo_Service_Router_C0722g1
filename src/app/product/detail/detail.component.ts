import { Component } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(public productService: ProductService, private router:Router) { }

  product: Product = this.productService.findProductByIndex(this.productService.index);

}
