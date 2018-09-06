import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenMarkComponent } from './even-mark.component';

describe('EvenMarkComponent', () => {
  let component: EvenMarkComponent;
  let fixture: ComponentFixture<EvenMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
