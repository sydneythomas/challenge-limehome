import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { AccordianSectionComponent } from './accordian-section.component';

describe('AccordianSectionComponent', () => {
  let component: AccordianSectionComponent;
  let fixture: ComponentFixture<AccordianSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordianSectionComponent],
      imports: [BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordianSectionComponent);
    component = fixture.componentInstance;
    component.filled = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the filled property when the user clicks on the header', () => {
    expect(component.filled).toBeFalse();

    const headerElement = fixture.debugElement.query(By.css('.header'));
    headerElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.filled).toBeTrue();

    headerElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.filled).toBeFalse();
  });
});
