import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificationPageComponent } from './clasification-page.component';

describe('ClasificationPageComponent', () => {
  let component: ClasificationPageComponent;
  let fixture: ComponentFixture<ClasificationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasificationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
