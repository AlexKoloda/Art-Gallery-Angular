import { Component } from '@angular/core';
import { ArtCard } from '../art-card/art-card';
import { IArt } from '../../../models/art.model';
import { ButtonComponent } from '../../../shared/button/button';

//TODO: test art description, replace with API data in feat.
const TEST_DESCRIPTION = `
Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. 
Curabitur vel libero ut nisl malesuada tincidunt. 
Suspendisse sit amet sem eget felis sodales lacinia. 
Donec ac sapien vitae lorem placerat luctus.
`;
//TODO: test art array, replace with API data in feat.

const TEST_ART_ARRAY: IArt[] = [
  {
    id: '1',
    name: 'Dangerous Lunch',
    description: TEST_DESCRIPTION,
    author: 'Unknown photographer',
    price: 10000,
    location: 'Louvre (paris, france)',
    categoryId: '1',
    imagePath: 'assets/images/dangerous-lunch.jpg',
    rating: 0,
  },
  {
    id: '2',
    name: 'Starry Night',
    description: TEST_DESCRIPTION,
    author: 'Vincent van Gogh',
    price: 10000,
    location: 'LOUVRE (PARIS, FRANCE)',
    categoryId: '1',
    imagePath: 'assets/images/star-night.jpg',
    rating: 0,
  },
  {
    id: '3',
    name: 'David',
    description: TEST_DESCRIPTION,
    author: 'Michelangelo',
    price: 10000,
    location: 'DELL ACCADEMIA (FLORENCE, ITALY)',
    categoryId: '2',
    imagePath: 'assets/images/david.jpg',
    rating: 0,
  },
  {
    id: '4',
    name: 'Mona Lisa',
    description: TEST_DESCRIPTION,
    author: 'Leonardo da vinci',
    price: 10000,
    location: 'Louvre (paris, france)',
    categoryId: '1',
    imagePath: 'assets/images/lisa.jpg',
    rating: 0,
  },
];

@Component({
  selector: 'app-art-grid',
  imports: [ArtCard],
  templateUrl: './art-grid.html',
  styleUrl: './art-grid.scss',
})
export class ArtGrid {
  arts: IArt[] = TEST_ART_ARRAY;

  trackByArtId(index: number, art: IArt): string {
    return art.id;
  }
}
