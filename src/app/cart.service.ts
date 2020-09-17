import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';   // 与http.get有关

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = [];
  constructor(private http: HttpClient) {}

  // 购物车中添加、查看、清空商品
  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
