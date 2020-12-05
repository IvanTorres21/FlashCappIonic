import { Injectable } from '@angular/core';
import { Flashcard } from '../model/flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  flashcards: Flashcard[] = [];
  lastId: number = 0;

  constructor() { }

  /**
   * Get all the flashcards
   */
  public getFlashcards(): Flashcard[] {
    return this.flashcards;
  }

  /**
   * Return one flashcard
   * @param id Id of the flashcard to return
   */
  public getFlashcard(id: number): Flashcard {
    return this.flashcards.filter(t => t.id === id)[0];
  }

  /**
   * Function that saves a new flashcard or updates an 
   * already existing one, it only saves it in memory. 
   * it still needs to be saved to local storage.
   * @param flashcard Flashcard to save or update
   */
  public saveFlashcard(flashcard: Flashcard){
    if(flashcard.id == undefined) {
      flashcard.id = this.lastId++;
      this.flashcards.push(flashcard);
    } else {
      this.deleteFlashcard(flashcard.id);
      this.flashcards.push(flashcard);
    }
  }

  /**
   * Function that deletes flashcards in memory, still
   * need to update local storage
   * @param id Id of the task to delete
   */
  public deleteFlashcard(id: number){
    this.flashcards = this.flashcards.filter(t => t.id != id);
  }
}
