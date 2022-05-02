import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateArticleDialogComponent } from './admin-create-article-dialog.component';

describe('AdminCreateArticleDialogComponent', () => {
  let component: AdminCreateArticleDialogComponent;
  let fixture: ComponentFixture<AdminCreateArticleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateArticleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateArticleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
