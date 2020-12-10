import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/model/group';
import { Groupservice } from 'src/app/services/groupservice';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.page.html',
  styleUrls: ['./add-group.page.scss'],
})
export class AddGroupPage implements OnInit {

  public group :Group = {name:""};
  constructor(
    public groupService: Groupservice,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id != undefined){
      this.group = this.groupService.getGroup(Number.parseInt(id));
    }
  }

  saveGroup(){
    this.groupService.saveGroup(this.group);
    this.router.navigateByUrl("/see");
  }

}
