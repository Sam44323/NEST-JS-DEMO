import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = new Date().toISOString();
    const prod: Product = new Product(prodId, title, desc, price);
    this.products.push(prod);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getProduct(prodId: string) {
    const product = this.products.find((prod) => prod.id === prodId);
    if (!product) {
      throw new NotFoundException();
    }
    return { ...product };
  }
}
