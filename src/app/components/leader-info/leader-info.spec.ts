import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GymcardComponent } from './leader-info';

describe('GymcardComponent', () => {
  let component: GymcardComponent;
  let fixture: ComponentFixture<GymcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymcardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GymcardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
