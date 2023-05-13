import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeniorioPage } from './seniorio.page';

describe('SeniorioPage', () => {
  let component: SeniorioPage;
  let fixture: ComponentFixture<SeniorioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeniorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
