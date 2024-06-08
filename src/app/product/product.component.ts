import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductResponseDto, ProductRequestDto } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: ProductResponseDto[] = [];
  newProduct: ProductRequestDto = {
    name: '',
    description: '',
    price: 0,
    categoryId: 0 // Initialize categoryId to 0
  };
  categories: { id: number, name: string }[] = [
    { id: 1, name: 'Category 1' }, // Define categories here
    { id: 2, name: 'Category 2' },
    // Add more categories as needed
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  createProduct(): void {
    this.productService.createProduct(this.newProduct).subscribe(() => {
      this.loadProducts();
      // Reset newProduct after successful creation
      this.newProduct = { name: '', description: '', price: 0, categoryId: 0 };
    });
  }
}
