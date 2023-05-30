import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-accordian-section',
  templateUrl: './accordian-section.component.html',
  styleUrls: ['./accordian-section.component.scss'],
  animations: [
    trigger('sectionAnimation', [
      state('collapsed', style({ height: '1em', overflow: 'hidden' })),
      state('expanded', style({ height: '*', overflow: 'hidden' })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
  ],
})
export class AccordianSectionComponent {
  @Input() title!: string;
  @Input() filled: boolean = false;

  // TODO needs work, probably will send the action upstream
  toggle(): void {
    this.filled = !this.filled;
  }
}
