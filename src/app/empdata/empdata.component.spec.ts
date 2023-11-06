import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdataComponent } from './empdata.component';

describe('EmpdataComponent', () => {
  let component: EmpdataComponent;
  let fixture: ComponentFixture<EmpdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpdataComponent]
    });
    fixture = TestBed.createComponent(EmpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
