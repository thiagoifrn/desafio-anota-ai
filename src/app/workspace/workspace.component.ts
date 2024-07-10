import {
  Component,
  inject,
  ɵprovideZonelessChangeDetection,
} from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { CardItem } from './types/types';
import { GetcardsService } from './service/getcards.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workspace',
  standalone: true,
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss',
  imports: [CardComponent, FormsModule],
})
export class WorkspaceComponent {
  cardItems: CardItem[] = [];
  originalCardItems: CardItem[] = [];
  serviceCard = inject(GetcardsService);
  searchTerm: string = '';

  ngOnInit(): void {
    this.serviceCard.getItems().subscribe((card: CardItem[]) => {
      console.log(card);
      this.cardItems = card;
      this.originalCardItems = card;
    });
  }

  deletCard(item: CardItem) {
    const index = this.cardItems.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      this.cardItems.splice(index, 1);
      this.cardItems = [...this.cardItems];
    }
  }

  filterItems(): void {
    const searchTerm = this.searchTerm.toLowerCase().trim();
    if (searchTerm === '') {
      this.cardItems = [...this.originalCardItems];
    } else {
      this.cardItems = this.originalCardItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm) ||
          item.description.toLowerCase().includes(searchTerm)
      );
    }
  }
}
