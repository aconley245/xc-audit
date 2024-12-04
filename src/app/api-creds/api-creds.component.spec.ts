import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCredsComponent } from './api-creds.component';

describe('ApiCredsComponent', () => {
  let component: ApiCredsComponent;
  let fixture: ComponentFixture<ApiCredsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCredsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
