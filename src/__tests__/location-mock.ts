import { vi } from 'vitest';

class LocationMock implements Location {
  ancestorOrigins!: DOMStringList;
  hash = '';
  host = '';
  hostname = '';
  href = '';
  toString = vi.fn();
  origin = '';
  pathname = '';
  port = '';
  protocol = '';
  search = '';
  assign = vi.fn();
  reload = vi.fn();
  replace = vi.fn();
}

export default LocationMock;
