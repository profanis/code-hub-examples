import { Injectable } from '@angular/core';

@Injectable()
export class ServicesDiService {

  constructor() { }

  getItems(): String[] {
    return [...Array(10).keys()].map(c => `item_${c}`);
  }

}
