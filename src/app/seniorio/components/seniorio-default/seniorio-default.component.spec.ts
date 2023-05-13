import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeniorioDefaultComponent } from './seniorio-default.component';

describe('SeniorioDefaultComponent', () => {
  let component: SeniorioDefaultComponent;
  let fixture: ComponentFixture<SeniorioDefaultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorioDefaultComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeniorioDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
