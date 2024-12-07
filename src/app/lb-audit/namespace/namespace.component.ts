import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LbAuditComponent } from '../lb-audit.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-namespace',
  imports: [CommonModule, FormsModule,LbAuditComponent],
  templateUrl: './namespace.component.html',
  styleUrl: './namespace.component.css'
})
export class NamespaceComponent {

  namespaceData: any[] = [];
  namespace: string = '';
  lbData: any[] = [];
  private backendServer = environment.backendServer;
  private backendServerPort = environment.backendServerPort;


 
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.fetchData();
  }


  fetchData() {
    this.httpClient.get(`http://${this.backendServer}:${this.backendServerPort}/api/namespaces`) // Replace with your API endpoint
      .subscribe((response: any) => {
        this.namespaceData = response; // Assuming the API returns an array of objects
      });

    }

    getLoadbalancers() {
      this.httpClient.get(`http://${this.backendServer}:${this.backendServerPort}/api/namespace_loadbalancers/${this.namespace}`) // Replace with your API endpoint
      .subscribe((response: any) => {
        this.lbData = response; // Assuming the API returns an array of objects
      });
    }
}
