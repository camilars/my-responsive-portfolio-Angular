import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  frontend = false;
  backend = false;
  tools = false;
  design = false;


  changeSkills(skill: string) {
    if(skill == 'languages') {
      if(this.frontend) {
        this.frontend = false;
      } else {
        this.frontend = true;
      }
    }

    if(skill == 'backend') {
      if(this.backend) {
        this.backend = false;
      } else {
        this.backend = true;
      }
    }

    if(skill == 'design') {
      if(this.design) {
        this.design = false;
      } else {
        this.design = true;
      }
    }

    if(skill == 'tools') {
      if(this.tools) {
        this.tools = false;
      } else {
        this.tools = true;
      }
    }

  }

}
