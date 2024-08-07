import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificationTeamsPageComponent } from './clasification-teams-page.component';

describe('ClasificationTeamsPageComponent', () => {
  let component: ClasificationTeamsPageComponent;
  let fixture: ComponentFixture<ClasificationTeamsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasificationTeamsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasificationTeamsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
