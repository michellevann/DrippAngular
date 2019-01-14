import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingIndexComponent } from './painting-index.component';

describe('PaintingIndexComponent', () => {
  let component: PaintingIndexComponent;
  let fixture: ComponentFixture<PaintingIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
