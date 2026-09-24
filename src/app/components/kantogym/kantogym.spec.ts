import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KantogymComponent } from './kantogym';

describe('KantogymComponent', () => {
  let component: KantogymComponent;
  let fixture: ComponentFixture<KantogymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KantogymComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KantogymComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}
);
