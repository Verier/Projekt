import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniLoginComponent } from './mini-login.component';

describe('MiniLoginComponent', () => {
  let component: MiniLoginComponent;
  let fixture: ComponentFixture<MiniLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
