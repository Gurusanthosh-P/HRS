import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityhotelsComponent } from './cityhotels.component';

describe('CityhotelsComponent', () => {
  let component: CityhotelsComponent;
  let fixture: ComponentFixture<CityhotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityhotelsComponent]
    });
    fixture = TestBed.createComponent(CityhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
