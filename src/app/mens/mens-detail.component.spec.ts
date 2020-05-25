import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensDetailComponent } from './mens-detail.component';

describe('MensDetailComponent', () => {
  let component: MensDetailComponent;
  let fixture: ComponentFixture<MensDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
