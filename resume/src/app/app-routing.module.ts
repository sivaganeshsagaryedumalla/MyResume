import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsAndExperienceComponent } from './skills-and-experience/skills-and-experience.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [{ pathMatch: "full", path: '', component: IntroComponent }, { path: 'skill', component: SkillsAndExperienceComponent }, { path: 'about', component: AboutComponent },
{ path: 'education', component: EducationComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
