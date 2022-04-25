import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoriDialogComponent } from './create-categori-dialog.component';

describe('CreateCategoriDialogComponent', () => {
  let component: CreateCategoriDialogComponent;
  let fixture: ComponentFixture<CreateCategoriDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCategoriDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoriDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
