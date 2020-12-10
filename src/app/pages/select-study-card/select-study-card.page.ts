import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Groupservice } from 'src/app/services/groupservice';

@Component({
  selector: 'app-select-study-card',
  templateUrl: './select-study-card.page.html',
  styleUrls: ['./select-study-card.page.scss'],
})
export class SelectStudyCardPage implements OnInit {

  constructor(
    public groupService :Groupservice,
    private router :Router
  ) { }

  ngOnInit() {
  }

  goStudy(id :number){
    this.router.navigateByUrl('study/' + id);
  }
  goBack() {
    this.router.navigateByUrl('study-hub');
  }
}
