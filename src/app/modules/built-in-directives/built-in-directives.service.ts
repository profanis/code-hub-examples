import { Injectable } from "@angular/core";

@Injectable()
export class BuiltInDirectivesService {

  constructor() { }

  getItems(): String[] {
    return [...Array(10).keys()].map(c => `item_${c}`);
  }

}
