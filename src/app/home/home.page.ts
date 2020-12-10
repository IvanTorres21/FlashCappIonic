import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  goAdd(){
    this.router.navigateByUrl('/add');
  }
  goSee(){
    this.router.navigateByUrl('/see');
  }
  goStudy(){
    this.router.navigateByUrl('/study-hub');
  }
  async presentInfo() {
    let alert = await this.alertCtrl.create({
      header: 'App information',
      message: `
                <p class="info">Use <b>add flashcard</b> to add a new word to the app.<br>
                Use <b>See flashcards</b> to see and edit your flashcards.<br>
                Use <b>Study</b> to practice your flashcards!</p>`,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }
}
