import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingDeleteComponent } from './painting-delete.component';

describe('PaintingDeleteComponent', () => {
  let component: PaintingDeleteComponent;
  let fixture: ComponentFixture<PaintingDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
