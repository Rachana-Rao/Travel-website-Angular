import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelEditComponent } from './travel-edit.component';

describe('TravelEditComponent', () => {
  let component: TravelEditComponent;
  let fixture: ComponentFixture<TravelEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
