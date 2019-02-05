import { Resolve } from '@angular/router';

import { ResolverModel } from './resolver.model';
import { ResolverService } from './resolver.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ResolverResolver implements Resolve<ResolverModel[]> {

  constructor(private resolverService: ResolverService) {

  }

  resolve() {
    return this.resolverService.getData();
  }

}
