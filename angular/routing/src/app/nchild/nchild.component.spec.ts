import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NchildComponent } from './nchild.component';

describe('NchildComponent', () => {
  let component: NchildComponent;
  let fixture: ComponentFixture<NchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
