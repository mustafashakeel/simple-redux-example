import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MychildComponent } from './mychild.component';

describe('MychildComponent', () => {
  let component: MychildComponent;
  let fixture: ComponentFixture<MychildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MychildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MychildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
