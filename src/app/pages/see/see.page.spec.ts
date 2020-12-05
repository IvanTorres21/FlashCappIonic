import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeePage } from './see.page';

describe('SeePage', () => {
  let component: SeePage;
  let fixture: ComponentFixture<SeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
