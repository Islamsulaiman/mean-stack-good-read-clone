import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryalComponent } from './tryal.component';

describe('TryalComponent', () => {
  let component: TryalComponent;
  let fixture: ComponentFixture<TryalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
