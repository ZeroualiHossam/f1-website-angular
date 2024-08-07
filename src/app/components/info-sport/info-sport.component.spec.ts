import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSportComponent } from './info-sport.component';

describe('InfoSportComponent', () => {
  let component: InfoSportComponent;
  let fixture: ComponentFixture<InfoSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoSportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
