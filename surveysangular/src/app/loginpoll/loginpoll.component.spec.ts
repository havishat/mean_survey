import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpollComponent } from './loginpoll.component';

describe('LoginpollComponent', () => {
  let component: LoginpollComponent;
  let fixture: ComponentFixture<LoginpollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
