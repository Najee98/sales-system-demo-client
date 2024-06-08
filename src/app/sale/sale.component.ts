import { Component, OnInit } from '@angular/core';
import { SaleService } from '../services/sale.service';
import { SaleResponseDto, SaleRequestDto, ProductUpdateRequestDto } from '../models/sale.model';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  sales: SaleResponseDto[] = [];
  newSale: SaleRequestDto = {
    products: [],
    seller: '',
    clientId: 0
  };
  newProductUpdate: ProductUpdateRequestDto = {
    productId: 0,
    quantity: 0,
    price: 0
  };

  constructor(private saleService: SaleService) {}

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales(): void {
    this.saleService.getSales().subscribe((sales) => {
      this.sales = sales;
    });
  }

  addProductToSale(): void {
    this.newSale.products.push({ ...this.newProductUpdate });
    this.newProductUpdate = { productId: 0, quantity: 0, price: 0 };
  }

  createSale(): void {
    this.saleService.createSale(this.newSale).subscribe(() => {
      this.loadSales();
    });
  }
}
