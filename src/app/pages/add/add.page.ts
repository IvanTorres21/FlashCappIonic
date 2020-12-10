import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flashcard } from 'src/app/model/flashcard';
import { FlashcardsService } from 'src/app/services/flashcards.service';
import { Groupservice } from 'src/app/services/groupservice';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  flash: Flashcard = {ogWord:"", trWord:"", prWord:"", group: 0};
  groupId: number;

  constructor(
    public groupService: Groupservice,
    private flashService: FlashcardsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    // Check if we are editing an old flashcard or adding a new one
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    
    if (id != undefined){
      console.log(id);
      this.flash.id = this.flashService.getFlashcard(Number.parseInt(id)).id;
      this.flash.ogWord = this.flashService.getFlashcard(Number.parseInt(id)).ogWord;
      this.flash.trWord = this.flashService.getFlashcard(Number.parseInt(id)).trWord;
      this.flash.prWord = this.flashService.getFlashcard(Number.parseInt(id)).prWord;

    }
  }

  saveFlashcard(){
    const actId = this.flash.id;
    this.flash.group = this.groupId;
    this.flashService.saveFlashcard(this.flash);
    // reset values
    this.groupId = undefined;
    this.flash = {ogWord:"", trWord:"", prWord:"", group:0};
    if (actId == undefined) this.router.navigateByUrl("/");
    else this.router.navigateByUrl("see")
    
  }
  goBack() {
    this.router.navigateByUrl("/");
  }
}
