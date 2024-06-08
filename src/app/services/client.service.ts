import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientResponseDto, ClientRequestDto } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8080/api'; // Base URL

  constructor(private http: HttpClient) {}

  getClients(): Observable<ClientResponseDto[]> {
    const url = `${this.baseUrl}/clients`;
    return this.http.get<ClientResponseDto[]>(url);
  }

  createClient(client: ClientRequestDto): Observable<ClientResponseDto> {
    const url = `${this.baseUrl}/clients/create`;
    return this.http.post<ClientResponseDto>(url, client);
  }

  updateClient(id: number, client: ClientRequestDto): Observable<ClientResponseDto> {
    const url = `${this.baseUrl}/clients/update/${id}`;
    return this.http.put<ClientResponseDto>(url, client);
  }
}
