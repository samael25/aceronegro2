import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HabilidadTableTemplateComponent } from './habilidad-table-template.component';

describe('HabilidadTableTemplateComponent', () => {
  let component: HabilidadTableTemplateComponent;
  let fixture: ComponentFixture<HabilidadTableTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilidadTableTemplateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HabilidadTableTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
