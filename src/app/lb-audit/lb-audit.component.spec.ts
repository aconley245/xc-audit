import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LbAuditComponent } from './lb-audit.component';

describe('LbAuditComponent', () => {
  let component: LbAuditComponent;
  let fixture: ComponentFixture<LbAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LbAuditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LbAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
