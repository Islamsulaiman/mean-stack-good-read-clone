import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookComponent } from './single-book.component';

describe('SingleBookComponent', () => {
  let component: SingleBookComponent;
  let fixture: ComponentFixture<SingleBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
