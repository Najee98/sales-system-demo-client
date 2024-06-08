import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaleResponseDto, SaleRequestDto } from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private baseUrl = 'http://localhost:8080/api'; // Base URL

  constructor(private http: HttpClient) {}

  getSales(): Observable<SaleResponseDto[]> {
    const url = `${this.baseUrl}/sales`;
    return this.http.get<SaleResponseDto[]>(url);
  }

  createSale(sale: SaleRequestDto): Observable<SaleResponseDto> {
    const url = `${this.baseUrl}/sales/create`;
    return this.http.post<SaleResponseDto>(url, sale);
  }

  updateSale(id: number, sale: SaleRequestDto): Observable<SaleResponseDto> {
    const url = `${this.baseUrl}/sales/update/${id}`;
    return this.http.put<SaleResponseDto>(url, sale);
  }
}
