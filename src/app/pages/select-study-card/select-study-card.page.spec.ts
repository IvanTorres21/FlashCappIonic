import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectStudyCardPage } from './select-study-card.page';

describe('SelectStudyCardPage', () => {
  let component: SelectStudyCardPage;
  let fixture: ComponentFixture<SelectStudyCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectStudyCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectStudyCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
