import { TestBed } from '@angular/core/testing';

import { AuthorizedLazyLoadGuard } from './authorized.guard';

describe('AuthorizedGuard', () => {
  let guard: AuthorizedLazyLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthorizedLazyLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
