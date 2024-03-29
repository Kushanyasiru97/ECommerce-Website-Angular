import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodel';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{
  showproduct: any = [];
  constructor(private api: ApiService){}
  ngOnInit(): void {
    this.api.products().subscribe(res =>{
      this.showproduct = res;
    })
  }

  deleteitem(item:product){
    this.api.removecartitem(item);
  }
}
