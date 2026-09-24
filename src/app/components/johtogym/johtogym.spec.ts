import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JohtogymComponent } from './johtogym';

describe('JohtogymComponent', () => {
  let component: JohtogymComponent;
  let fixture: ComponentFixture<JohtogymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JohtogymComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JohtogymComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}
);
