import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddMarkComponent } from './odd-mark.component';

describe('OddMarkComponent', () => {
  let component: OddMarkComponent;
  let fixture: ComponentFixture<OddMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
