import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeregesterComponent } from './reativeregester.component';

describe('ReativeregesterComponent', () => {
  let component: ReativeregesterComponent;
  let fixture: ComponentFixture<ReativeregesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativeregesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReativeregesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
