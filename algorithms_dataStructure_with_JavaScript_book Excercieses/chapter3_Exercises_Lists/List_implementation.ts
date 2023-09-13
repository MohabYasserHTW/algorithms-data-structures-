class List<T> {
  // Properties
  private listSize: number = 0;
  private pos: number = 0;
  private data: T[] = [];

  // Methods
  length(): number {
    
    return this.listSize;
  }

  clear(): void {
    this.data = [];
    this.listSize = this.pos = 0;
  }

  find(element: T): number {
    return this.data.indexOf(element);
  }

  toString(): string {
    return this.data.toString();
  }

  insert(element: T, after: T): void {
    const afterIndex = this.find(after);
    if (afterIndex === -1) {
      console.log(`${after} not found on the list`);
    } else {
      this.data.splice(afterIndex + 1, 0, element);
      this.listSize++;
    }
  }

  append(element: T): void {
    this.data.push(element);
    this.listSize++;
  }

  remove(element: T): void {
    const removeIndex = this.find(element);
    if (removeIndex === -1) {
      console.log(`${element} not found on the list`);
    } else {
      this.data.splice(removeIndex, 1);
      this.pos = 0;
      this.listSize--;
    }
  }

  front(): void {
    this.pos = 0;
  }

  end(): void {
    this.pos = this.listSize - 1;
  }

  prev(): void {
    if (this.pos > 0) {
      this.pos--;
    } else {
      console.log(`you are now on the beginning of the list: ${this.pos}`);
    }
  }

  next(): void {
    if (this.pos < this.listSize - 1) {
      this.pos++;
    } else {
      console.log(`you are now on the end of the list: ${this.pos}`);
    }
  }

  currPosition(): number {
    return this.pos;
  }

  moveTo(index: number): void {
    if (index < this.listSize - 1 && index >= 0) {
      this.pos = index;
    } else {
      console.log(`${index} is out of the list range`);
    }
  }

  getElement(): T  {
    return this.data[this.pos];
  }

  contains(element: T): boolean {
    return this.data.indexOf(element) !== -1;
  }

  
}

export default List;
