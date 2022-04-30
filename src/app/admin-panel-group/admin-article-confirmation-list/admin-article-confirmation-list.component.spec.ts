import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticleConfirmationListComponent } from './admin-article-confirmation-list.component';

describe('AdminArticleConfirmationListComponent', () => {
  let component: AdminArticleConfirmationListComponent;
  let fixture: ComponentFixture<AdminArticleConfirmationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArticleConfirmationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticleConfirmationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
