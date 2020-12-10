import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flashcard } from 'src/app/model/flashcard';
import { FlashcardsService } from 'src/app/services/flashcards.service';
import { Groupservice } from 'src/app/services/groupservice';

@Component({
  selector: 'app-study',
  templateUrl: './study.page.html',
  styleUrls: ['./study.page.scss'],
})
export class StudyPage implements OnInit {

  flash: Flashcard = { ogWord: "", trWord: "", prWord: "", group: 0 };
  flashCards: Flashcard[] = [];
  word: String = "";
  shown: Boolean = false;
  finished: Boolean = false;

  constructor(
    public flashService: FlashcardsService,
    private groupService: Groupservice,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get("id");
    this.flashCards = this.flashService.getGroupFlashcards(Number.parseInt(id));
    this.getRand();
    
  }

  /**
   * Function that asks for a random flashcard
   */
  getRand() {
    if (this.flashCards.length != 0) {
      // Get the random flashcard
      var rand = Math.floor(Math.random() * this.flashCards.length);
      this.flash = this.flashCards[rand];
      // Delete the flashcard that came out
      this.flashCards = this.flashCards.filter(f => f.id != this.flash.id);
      // Set the data of the flashcard
      this.word = this.flash.ogWord;
      this.shown = false;
    } else this.finished = true;
  }
  /**
   * Function that shows the meaning of a word and pronunciation 
   */
  showRes() {
    if (!this.shown) {
      this.word = this.flash.trWord;
      this.shown = true;
    } else {
      this.word = this.flash.ogWord;
      this.shown = false;
    }
  }

  goBack() {
    this.finished = false;
    this.router.navigateByUrl("/");
  }
}
