import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian-section',
  templateUrl: './accordian-section.component.html',
  styleUrls: ['./accordian-section.component.scss'],
})
export class AccordianSectionComponent {
  @Input() title!: string;
  @Input() filled: boolean = false;

  toggle(): void {
    this.filled = !this.filled;
  }
}
