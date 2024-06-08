import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponseDto, ProductRequestDto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api'; // Base URL

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductResponseDto[]> {
    const url = `${this.baseUrl}/products`;
    return this.http.get<ProductResponseDto[]>(url);
  }

  createProduct(product: ProductRequestDto): Observable<ProductResponseDto> {
    const url = `${this.baseUrl}/products/create`;
    return this.http.post<ProductResponseDto>(url, product);
  }

  updateProduct(id: number, product: ProductRequestDto): Observable<ProductResponseDto> {
    const url = `${this.baseUrl}/products/update/${id}`;
    return this.http.put<ProductResponseDto>(url, product);
  }
}
