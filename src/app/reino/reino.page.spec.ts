import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReinoPage } from './reino.page';

describe('ReinoPage', () => {
  let component: ReinoPage;
  let fixture: ComponentFixture<ReinoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
