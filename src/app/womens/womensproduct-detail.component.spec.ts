import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensproductDetailComponent } from './womensproduct-detail.component';

describe('WomensproductDetailComponent', () => {
  let component: WomensproductDetailComponent;
  let fixture: ComponentFixture<WomensproductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensproductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensproductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
