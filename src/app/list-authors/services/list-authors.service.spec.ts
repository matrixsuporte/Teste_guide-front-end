import { TestBed } from '@angular/core/testing';

import { ListAuthorsService } from './list-authors.service';

describe('ListAuthorsService', () => {
  let service: ListAuthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAuthorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
