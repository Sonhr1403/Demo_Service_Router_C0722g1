import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/Product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(public productService: ProductService, private router:Router) { }
  ngOnInit(): void {
  }

  delete(index: number){
    this.productService.deleteProduct(index);
  }

  showEdit(index : number) : void{
    this.productService.showEdit(index);
    this.router.navigate(["/edit"]);
  }

  showDelete(index : number) : void{
    this.productService.showDelete(index);
    this.router.navigate(["/delete"]);
  }
}
