import { TestBed } from '@angular/core/testing';

import { Videojuegosservices } from './videojuegosservices';

describe('Videojuegosservices', () => {
  let service: Videojuegosservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Videojuegosservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
