import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLg } from './card-lg';

describe('CardLg', () => {
  let component: CardLg;
  let fixture: ComponentFixture<CardLg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
