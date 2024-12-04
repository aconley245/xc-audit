import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WafAuditComponent } from '../waf-audit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-policies',
  imports: [FormsModule, WafAuditComponent, CommonModule],
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css'
})
export class PoliciesComponent {
  namespaceData: any[] = [];
  namespace: string = '';
  wafData: any[] = [];
  wafPolicy: string = '';

 
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.fetchData();
  }


  fetchData() {
    this.httpClient.get('http://10.1.1.4:8000/api/namespaces') // Replace with your API endpoint
      .subscribe((response: any) => {
        this.namespaceData = response; // Assuming the API returns an array of objects
      });

    }

    getWAFByNamespace() {
      this.httpClient.get('http://10.1.1.4:8000/api/namespace_waf_policies/'+this.namespace) // Replace with your API endpoint
      .subscribe((response: any) => {
        this.wafData = response; // Assuming the API returns an array of objects
      });
    }
}
