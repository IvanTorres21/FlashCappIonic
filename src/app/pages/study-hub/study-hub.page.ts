import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Groupservice } from 'src/app/services/groupservice';

@Component({
  selector: 'app-study-hub',
  templateUrl: './study-hub.page.html',
  styleUrls: ['./study-hub.page.scss'],
})
export class StudyHubPage implements OnInit {

  constructor(
    private router :Router
  ) { }

  ngOnInit() {
  }

  studyFlash(){
    this.router.navigateByUrl("select-study-card");
  }

  goBack(){
    this.router.navigateByUrl("/");
  }
}
