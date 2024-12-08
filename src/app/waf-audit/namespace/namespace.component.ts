import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WafAuditComponent } from '../waf-audit.component';

@Component({
  selector: 'app-namespace',
  imports: [FormsModule, CommonModule, WafAuditComponent],
  templateUrl: './namespace.component.html',
  styleUrl: './namespace.component.css',
})
export class NamespaceComponent implements OnInit {
  namespaceData: any[] = [];
  namespace: string = '';
  wafData: any[] = [];
  wafPolicy: string = '';
  lbData: any[] =[];
 
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

    getWAFByNamespace() {
      this.httpClient.get(`http://${this.backendServer}:${this.backendServerPort}/api/namespace_waf_policies/${this.namespace}`) // Replace with your API endpoint
      .subscribe((response: any) => {
        this.wafData = response; // Assuming the API returns an array of objects
      });
    }

    getLoadbalancers() {
      console.log("Loading turned on from getLoadbalancers")
      this.httpClient.get(`http://${this.backendServer}:${this.backendServerPort}/api/namespace_loadbalancers/${this.namespace}`) // Replace with your API endpoint
        .subscribe((response: any) => {
          this.lbData = response; // Assuming the API returns an array of objects
        });
    }
}
