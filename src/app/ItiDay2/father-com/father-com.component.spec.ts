import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComComponent } from './father-com.component';

describe('FatherComComponent', () => {
  let component: FatherComComponent;
  let fixture: ComponentFixture<FatherComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
