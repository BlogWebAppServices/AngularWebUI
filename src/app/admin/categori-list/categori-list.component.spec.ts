import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriListComponent } from './categori-list.component';

describe('CategoriListComponent', () => {
  let component: CategoriListComponent;
  let fixture: ComponentFixture<CategoriListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
