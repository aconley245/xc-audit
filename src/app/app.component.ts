import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'xc-audit';

  constructor(private router: Router) {}

  checkToken() {
    const apiToken = localStorage.getItem('apiToken');
    const tenant = localStorage.getItem('tenant');

    if (!apiToken && !tenant) {
      console.log('Routing to api-creds');
      this.router.navigate([ '/api-creds' ]);
    }
  }

  ngOnInit(): void {
    this.checkToken();
  }
}
