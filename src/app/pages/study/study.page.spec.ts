import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudyPage } from './study.page';

describe('StudyPage', () => {
  let component: StudyPage;
  let fixture: ComponentFixture<StudyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
