import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResolverService } from '../resolver.service';

@Component({
  selector: 'app-resolver',
  template: `
    <p>
      This is the content of the component!!
    </p>
    {{myData | json}}
  `,
  styles: []
})
export class ResolverComponent implements OnInit {

  myData: any;

  constructor(
    private resolverService: ResolverService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.myData = this.route.snapshot.data.myData;

    // this.resolverService.getData().subscribe((data) => this.myData = data);
  }

}
