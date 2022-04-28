import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCategoriesComponent } from './right-categories.component';

describe('RightCategoriesComponent', () => {
  let component: RightCategoriesComponent;
  let fixture: ComponentFixture<RightCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
