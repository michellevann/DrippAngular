import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseIndexComponent } from './purchase-index.component';

describe('PurchaseIndexComponent', () => {
  let component: PurchaseIndexComponent;
  let fixture: ComponentFixture<PurchaseIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
