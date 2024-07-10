import { Component, Input, input } from '@angular/core';
import { CardItem } from '../../types/types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardItem: CardItem = {
    id: 0,
    title: '',
    description: '',
    img: '',
    type: '',
  };
  @Input()
  callback: Function = () => {};

  ngOnit(): void {
    console.log(this.callback);
  }

  getBadgeClass(type: string) {
    switch (type) {
      case 'Paisagem':
        return 'badge-paisagem';
      case 'Flor':
        return 'badge-flor';
      case 'Pizza':
        return 'badge-pizza';
      default:
        return '';
    }
  }
}
