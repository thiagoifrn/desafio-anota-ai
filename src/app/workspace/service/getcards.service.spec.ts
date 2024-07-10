// src/app/services/getcards.service.spec.ts

import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GetcardsService } from './getcards.service';
import { CardItem } from '../types/types';

describe('GetcardsService', () => {
  let service: GetcardsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetcardsService],
    });
    service = TestBed.inject(GetcardsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transform item types correctly', () => {
    const rawItems: CardItem[] = [
      {
        id: 1,
        title: 'Test Item 1',
        description: 'Test Description 1',
        img: 'test-img-1.jpg',
        type: '1',
      },
      {
        id: 2,
        title: 'Test Item 2',
        description: 'Test Description 2',
        img: 'test-img-2.jpg',
        type: '2',
      },
      {
        id: 3,
        title: 'Test Item 3',
        description: 'Test Description 3',
        img: 'test-img-3.jpg',
        type: '3',
      },
    ];

    const transformedItems: CardItem[] = [
      {
        id: 1,
        title: 'Test Item 1',
        description: 'Test Description 1',
        img: 'test-img-1.jpg',
        type: 'Paisagem',
      },
      {
        id: 2,
        title: 'Test Item 2',
        description: 'Test Description 2',
        img: 'test-img-2.jpg',
        type: 'Flor',
      },
      {
        id: 3,
        title: 'Test Item 3',
        description: 'Test Description 3',
        img: 'test-img-3.jpg',
        type: 'Pizza',
      },
    ];

    service.getItems().subscribe((items) => {
      expect(items).toEqual(transformedItems);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(rawItems);
  });

  it('should handle unexpected item types', () => {
    const rawItems: CardItem[] = [
      {
        id: 1,
        title: 'Test Item 1',
        description: 'Test Description 1',
        img: 'test-img-1.jpg',
        type: '4',
      },
    ];

    const transformedItems: CardItem[] = [
      {
        id: 1,
        title: 'Test Item 1',
        description: 'Test Description 1',
        img: 'test-img-1.jpg',
        type: '',
      },
    ];

    service.getItems().subscribe((items) => {
      expect(items).toEqual(transformedItems);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(rawItems);
  });
});
