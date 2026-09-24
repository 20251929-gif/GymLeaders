import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hoenngym } from './hoenngym';

describe('Hoenngym', () => {
  let component: Hoenngym;
  let fixture: ComponentFixture<Hoenngym>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoenngym],
    }).compileComponents();

    fixture = TestBed.createComponent(Hoenngym);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
