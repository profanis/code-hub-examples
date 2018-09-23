import { Injectable } from '@angular/core';

@Injectable()
export class AdvancedDiService {

  constructor() {
    console.log("AdvancedDiService init")
  }

  private _foo: string;

  get foo(){
    console.log(this._foo);
    return this._foo;
  }

  set foo(value: string){
    this._foo = value;
  }

}
