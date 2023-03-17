class LocalStorageMock implements Storage {
  private store: { [key: string]: string };

  constructor() {
    this.store = {};
  }

  [name: string]: unknown;

  length = 0;

  key(index: number): string | null {
    throw new Error(`Method not implemented. Index is ${index}`);
  }

  clear(): void {
    this.store = {};
  }

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string | number): void {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}

export default LocalStorageMock;
