import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flashcard } from 'src/app/model/flashcard';
import { FlashcardsService } from 'src/app/services/flashcards.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  flash: Flashcard = {ogWord:"", trWord:""};

  constructor(
    private flashService: FlashcardsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    // Check if we are editing an old flashcard or adding a new one
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id != undefined){
      this.flash.id = this.flashService.getFlashcard(Number.parseInt(id)).id;
      this.flash.ogWord = this.flashService.getFlashcard(Number.parseInt(id)).ogWord;
      this.flash.trWord = this.flashService.getFlashcard(Number.parseInt(id)).trWord;
      this.flash.prWord = this.flashService.getFlashcard(Number.parseInt(id)).prWord;
    }
  }

  saveFlashcard(){
    this.flashService.saveFlashcard(this.flash);
    if (this.flash.id == undefined) this.router.navigateByUrl("/");
    else this.router.navigateByUrl("see")
  }
  goBack() {
    this.router.navigateByUrl("/");
  }
}