import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-creds',
  imports: [FormsModule],
  templateUrl: './api-creds.component.html',
  styleUrl: './api-creds.component.css'
})
export class ApiCredsComponent {

  constructor(private router: Router) {}

  apiToken: string = ""
  tenant: string = ""


  onSubmit() {
    localStorage.setItem("apiToken", this.apiToken)
    localStorage.setItem("tenant", this.tenant)
    alert("Distributed Cloud Credentials Added")
    this.router.navigate(['/'])
  }

}
