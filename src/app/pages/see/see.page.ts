import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Flashcard } from 'src/app/model/flashcard';
import { FlashcardsService } from 'src/app/services/flashcards.service';

@Component({
  selector: 'app-see',
  templateUrl: './see.page.html',
  styleUrls: ['./see.page.scss'],
})
export class SeePage implements OnInit {

  flashcards: Flashcard[] = [];

  constructor(
    public flashService: FlashcardsService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.flashcards = this.flashService.getFlashcards();
  }

  goBack() {
    this.router.navigateByUrl("/");
  }

  /**
   * Shows information about the selected flashcard
   */
  async presentInfo(ogWord: String, trWord: String, prWord: String){
    let alert = await this.alertCtrl.create({
      header: 'Word info',
      message: `
                <p>Word: ${ogWord}<br>
                Meaning: ${trWord}<br>
                Pronunciation ${prWord}
                </p>`,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }

  /**
   * Sends the id of the flashcard to the add page to be edited
   * @param id Id of the flashcard to edit
   */
  goEdit(id: number){
    this.router.navigateByUrl(`/add${id != undefined ? '/' + id: ''}`);
  }

  /**
   * Asks the user if they really want to delete the flashcard
   */
  async presentConfirm(title: string, id: number){
    let alert = await this.alertCtrl.create({
      header: 'Confirm Deletion',
      message: `Do you want to delete the word "${title}"?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.goDeleteFlashcard(id);
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * Sends a request to the flashcard service to delete the flashcard
   * @param id Id of the flashcard to delete
   */
  goDeleteFlashcard(id: number){
    this.flashService.deleteFlashcard(id);
    this.flashcards = this.flashService.getFlashcards();
  }
}
