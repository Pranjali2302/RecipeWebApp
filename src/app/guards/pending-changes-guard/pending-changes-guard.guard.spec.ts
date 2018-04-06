import { TestBed, async, inject } from '@angular/core/testing';

import { PendingChangesGuardGuard } from './pending-changes-guard.guard';

describe('PendingChangesGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PendingChangesGuardGuard]
    });
  });

  it('should ...', inject([PendingChangesGuardGuard], (guard: PendingChangesGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
