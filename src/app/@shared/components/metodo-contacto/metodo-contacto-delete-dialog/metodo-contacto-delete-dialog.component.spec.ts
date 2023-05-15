import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetodoContactoDeleteDialogComponent } from './metodo-contacto-delete-dialog.component';

describe('MetodoContactoDeleteDialogComponent', () => {
  let component: MetodoContactoDeleteDialogComponent;
  let fixture: ComponentFixture<MetodoContactoDeleteDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoContactoDeleteDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetodoContactoDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
