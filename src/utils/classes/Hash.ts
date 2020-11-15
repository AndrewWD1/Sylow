interface IHasher<T> {
  [key: string]: T;
}

interface HasToString {
  toString: () => string;
}

export class Hash<K extends HasToString, T> {
  public hash: IHasher<T> = {};
  public order: K[] = [];

  public has(i: K): boolean {
    return this.hash[i.toString()] !== undefined;
  }

  public get(i: K): T {
    return this.hash[i.toString()];
  }

  public set(i: K, val: T) {
    if (!this.has(i)) this.order.push(i);
    this.hash[i.toString()] = val;
  }

  public toArray(): [K, T][] {
    return this.order.map((k) => [k, this.get(k)]);
  }
}
