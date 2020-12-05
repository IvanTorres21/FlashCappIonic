import {Plugins } from '@capacitor/core';
const { Storage } = Plugins;

import { Injectable } from '@angular/core';
import { Flashcard } from '../model/flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  flashcards: Flashcard[] = [];
  lastId: number = 0;

  constructor() { 

    // Get data from local storage
    this.readFlashCounter();
    this.readFlashcards();
  }

  /**
   * Get all the flashcards
   */
  public getFlashcards(): Flashcard[] {
    console.log(this.flashcards);
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
   * Returns one random flashcard
   * @param id Id of the last random
   */
  public getRandFlashcard(id: number): Flashcard {
    var rand = 0;
    // Make sure that it isnt the last one
    if (this.flashcards.length > 1) {
      do {
       rand = Math.floor(Math.random()*this.flashcards.length);
      } while (this.flashcards[rand].id === id);
    }
    console.log(rand);
    return this.flashcards[rand];
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
    this.storeFlashcards();
    this.storeFlashCounter(this.lastId);
  }

  /**
   * Function that deletes flashcards in memory, still
   * need to update local storage
   * @param id Id of the task to delete
   */
  public deleteFlashcard(id: number){
    this.flashcards = this.flashcards.filter(t => t.id != id);
    this.storeFlashcards();
  }

  // Local Storage functions

  async storeFlashCounter(tc: number){
    await Storage.set({
      key: 'flashCounter',
      value: tc.toString()
    });
  }
  async readFlashCounter(){
    const {value} = await Storage.get({key: 'flashCounter'});
    this.lastId = Number.parseInt(value);
  }

  async storeFlashcards(){
    await Storage.set({
      key: 'flashcards',
      value: JSON.stringify(this.flashcards)
    });
  }
  async readFlashcards(){
    const ret = await Storage.get({key: 'flashcards'});
    this.flashcards = JSON.parse(ret.value) ? JSON.parse(ret.value) : [];
  }
}
