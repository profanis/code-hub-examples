import { Injectable } from '@angular/core';
import { BuiltInPipeModel } from './built-in-pipe.model';

@Injectable({
  providedIn: 'root'
})
export class PipeDataService {

  constructor() { }

  getData(): BuiltInPipeModel {
    return {
      date: new Date,
      amount: 1.5
    };
  }
}
