import { TestBed } from '@angular/core/testing';

import { EventHandlersService } from './event-handlers.service';

describe('EventHandlersService', () => {
  let service: EventHandlersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventHandlersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
