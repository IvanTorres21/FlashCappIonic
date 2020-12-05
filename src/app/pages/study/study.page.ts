import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flashcard } from 'src/app/model/flashcard';
import { FlashcardsService } from 'src/app/services/flashcards.service';

@Component({
  selector: 'app-study',
  templateUrl: './study.page.html',
  styleUrls: ['./study.page.scss'],
})
export class StudyPage implements OnInit {

  flash: Flashcard = {ogWord: "", trWord: "", prWord: ""};
  word: String = "";
  shown: Boolean = false;

  constructor(
    public flashService: FlashcardsService,
    private router: Router
  ) { }

  ngOnInit() {
    // In case the user tries to get here manually
    if (this.flashService.getFlashcards().length < 1)  this.goBack();
    else this.getRand();
  }

  /**
   * Function that asks for a random flashcard
   */ 
  getRand(){
    var lastId = -1;
    if(this.flash.id != undefined) lastId = this.flash.id;
    this.flash = this.flashService.getRandFlashcard(lastId);
    this.word = this.flash.ogWord;
    this.shown = false;
  }
  /**
   * Function that shows the meaning of a word and pronunciation 
   */
  showRes(){
    if (!this.shown) {
      this.word = this.flash.trWord;
      this.shown = true;
    } else {
      this.word = this.flash.ogWord;
      this.shown = false;
    }
  }

  goBack(){
    this.router.navigateByUrl("/");
  }
}
