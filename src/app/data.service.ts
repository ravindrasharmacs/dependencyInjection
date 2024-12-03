import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = ['Item1', 'Item2', 'Item 3'];

  constructor() { }

  getData(): string[] {
    return this.data;
  }

  addItem(item: string): void {
    this.data.push(item);
  }
  
  }
