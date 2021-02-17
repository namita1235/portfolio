import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayobjectComponent } from './arrayobject.component';

describe('ArrayobjectComponent', () => {
  let component: ArrayobjectComponent;
  let fixture: ComponentFixture<ArrayobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayobjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
