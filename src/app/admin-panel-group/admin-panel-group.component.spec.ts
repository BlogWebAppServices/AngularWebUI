import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelGroupComponent } from './admin-panel-group.component';

describe('AdminPanelGroupComponent', () => {
  let component: AdminPanelGroupComponent;
  let fixture: ComponentFixture<AdminPanelGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
