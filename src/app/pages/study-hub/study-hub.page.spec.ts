import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudyHubPage } from './study-hub.page';

describe('StudyHubPage', () => {
  let component: StudyHubPage;
  let fixture: ComponentFixture<StudyHubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyHubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudyHubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
