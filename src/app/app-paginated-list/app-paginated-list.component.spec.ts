import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPaginatedListComponent } from './app-paginated-list.component';

describe('AppPaginatedListComponent', () => {
  let component: AppPaginatedListComponent;
  let fixture: ComponentFixture<AppPaginatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPaginatedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPaginatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
