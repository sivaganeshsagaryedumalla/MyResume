import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndExperienceComponent } from './skills-and-experience.component';

describe('SkillsAndExperienceComponent', () => {
  let component: SkillsAndExperienceComponent;
  let fixture: ComponentFixture<SkillsAndExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsAndExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsAndExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
