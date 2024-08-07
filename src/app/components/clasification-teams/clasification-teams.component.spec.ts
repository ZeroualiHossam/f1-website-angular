import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificationTeamsComponent } from './clasification-teams.component';

describe('ClasificationTeamsComponent', () => {
  let component: ClasificationTeamsComponent;
  let fixture: ComponentFixture<ClasificationTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasificationTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasificationTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
