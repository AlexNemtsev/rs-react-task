import { vi } from 'vitest';

class LocationMock implements Location {
  ancestorOrigins: DOMStringList;
  hash: string;
  host: string;
  hostname: string;
  href: string;
  toString = vi.fn();
  origin: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  assign = vi.fn();
  reload = vi.fn();
  replace = vi.fn();
}

export default LocationMock;
