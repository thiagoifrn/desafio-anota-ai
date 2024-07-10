import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CardItem } from '../types/types';

export enum ItemType {
  Paisagem = '1',
  Flor = '2',
  Pizza = '3',
}

@Injectable({
  providedIn: 'root',
})
export class GetcardsService {
  private apiUrl =
    'https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json';

  constructor(private http: HttpClient) {}

  getItems(): Observable<CardItem[]> {
    return this.http.get<CardItem[]>(this.apiUrl).pipe(
      map((items) =>
        items.map((item) => ({
          ...item,
          type: this.transformType(item.type),
        }))
      )
    );
  }

  private transformType(type: string): string {
    switch (type) {
      case ItemType.Paisagem:
        return 'Paisagem';
      case ItemType.Flor:
        return 'Flor';
      case ItemType.Pizza:
        return 'Pizza';
      default:
        return '';
    }
  }
}
