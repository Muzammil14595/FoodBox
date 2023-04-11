import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminallfoodComponent } from './adminallfood.component';

describe('AdminallfoodComponent', () => {
  let component: AdminallfoodComponent;
  let fixture: ComponentFixture<AdminallfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminallfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminallfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
