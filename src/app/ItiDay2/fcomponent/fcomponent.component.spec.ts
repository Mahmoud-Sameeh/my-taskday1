import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FComponentComponent } from './fcomponent.component';

describe('FComponentComponent', () => {
  let component: FComponentComponent;
  let fixture: ComponentFixture<FComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
