import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WafAuditComponent } from './waf-audit.component';

describe('WafAuditComponent', () => {
  let component: WafAuditComponent;
  let fixture: ComponentFixture<WafAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WafAuditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WafAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
