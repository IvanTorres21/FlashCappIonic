import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Flashcard } from 'src/app/model/flashcard';
import { FlashcardsService } from 'src/app/services/flashcards.service';
import { Groupservice } from 'src/app/services/groupservice';

@Component({
  selector: 'app-see',
  templateUrl: './see.page.html',
  styleUrls: ['./see.page.scss'],
})
export class SeePage implements OnInit {

  constructor(
    public flashService: FlashcardsService,
    public groupService: Groupservice,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
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
   * Sends the id of the group to the add-group page to be edited
   * @param id Id of the group to edit
   */
  goEditGroup(id: number){
    this.router.navigateByUrl(`/add-group${id != undefined ? '/' + id: ''}`);
  }
  /**
   * Sneds the user to the add-group page
   */
  goAddGroup(){
    this.router.navigateByUrl('add-group');
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
   * Asks the user if they really wanna delete the group
   * @param title Group name
   * @param id id of the group
   */
  async presentConfirmGroup(title: string, id: number){
    let alert = await this.alertCtrl.create({
      header: 'Confirm Deletion',
      message: `Do you want to delete the group "${title}" and all its flashcards?`,
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
            this.goDeleteGroup(id);
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
  }

  /**
   * Sends a request to the group service to delete the group
   * @param id Id of the group to delete
   */
  goDeleteGroup(id: number){
    this.groupService.deleteGroup(id);
    this.flashService.deleteFlashcardsGroup(id);
  }
}
