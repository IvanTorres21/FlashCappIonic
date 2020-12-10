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
    return this.flashcards;
  }

  /**
   * Get the flashcards from a certain group
   * @param gId Group id
   */
  public getGroupFlashcards(gId :number): Flashcard[] {
    return this.flashcards.filter(f => f.group == gId);
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
    return this.flashcards[rand];
  }

  /**
   * Function that saves a new flashcard or updates an 
   * already existing one
   * @param flashcard Flashcard to save or update
   */
  public saveFlashcard(flashcard: Flashcard){

    if (flashcard.group == undefined) {
      flashcard.group = 0;
    }
    if(flashcard.id == null) {
      flashcard.id = this.lastId++;
      this.flashcards.push(flashcard);
      this.storeFlashCounter(this.lastId);
      this.storeFlashcards();
    } else {
      this.deleteFlashcard(flashcard.id);
      this.flashcards.push(flashcard);
      this.storeFlashcards();
    }
    console.log(flashcard);
  }

  /**
   * Function that deletes flashcards
   * @param id Id of the task to delete
   */
  public deleteFlashcard(id: number){
    this.flashcards = this.flashcards.filter(t => t.id != id);
    if(this.flashcards.length == 0) {
      
      this.lastId = 0;
      this.storeFlashCounter(this.lastId);
    }
    
    this.storeFlashcards();    
  }

  /**
   * Deletes all the flashcards in a group
   * @param id Id of the group
   */
  public deleteFlashcardsGroup(id: number){
    this.flashcards = this.flashcards.filter(t => t.group != id);
    if(this.flashcards.length == 0) {
      
      this.lastId = 0;
      this.storeFlashCounter(this.lastId);
    }
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
    if (this.lastId == NaN) this.lastId = 0;
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
