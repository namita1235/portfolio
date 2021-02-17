import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovecalComponent } from './lovecal.component';

describe('LovecalComponent', () => {
  let component: LovecalComponent;
  let fixture: ComponentFixture<LovecalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LovecalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LovecalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
