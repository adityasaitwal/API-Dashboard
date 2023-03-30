import { TestBed } from '@angular/core/testing';

import { Serv3Service } from './serv3.service';

describe('Serv3Service', () => {
  let service: Serv3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serv3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
