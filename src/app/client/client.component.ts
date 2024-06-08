import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { ClientResponseDto, ClientRequestDto } from '../models/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: ClientResponseDto[] = [];
  newClient: ClientRequestDto = {
    firstName: '',
    lastName: '',
    mobile: ''
  };

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
    });
  }

  createClient(): void {
    this.clientService.createClient(this.newClient).subscribe(() => {
      this.loadClients();
    });
  }
}
