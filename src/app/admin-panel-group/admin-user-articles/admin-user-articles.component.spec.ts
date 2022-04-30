import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserArticlesComponent } from './admin-user-articles.component';

describe('AdminUserArticlesComponent', () => {
  let component: AdminUserArticlesComponent;
  let fixture: ComponentFixture<AdminUserArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
