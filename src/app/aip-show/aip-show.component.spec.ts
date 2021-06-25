import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AipShowComponent } from './aip-show.component';

describe('AipShowComponent', () => {
  let component: AipShowComponent;
  let fixture: ComponentFixture<AipShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AipShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AipShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
