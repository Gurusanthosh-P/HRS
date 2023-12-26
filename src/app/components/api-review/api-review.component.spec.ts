import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiReviewComponent } from './api-review.component';

describe('ApiReviewComponent', () => {
  let component: ApiReviewComponent;
  let fixture: ComponentFixture<ApiReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiReviewComponent]
    });
    fixture = TestBed.createComponent(ApiReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
