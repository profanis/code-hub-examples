import { DoCheck, AfterContentInit, AfterViewInit, ContentChild } from '@angular/core';
import { OnChanges, SimpleChanges, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit {

  @Input() lastName: string;
  @ContentChild("parentToChild") parentToChild;
  constructor() { }

  ngOnInit() {
    console.log("Child On init");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({"childOnChnages": "childOnChnages",changes});
  }

  ngDoCheck(): void {
    console.log("Child Do Check");
  }

  ngAfterContentInit(): void {
    console.log("Child After content init");
    console.log(this.parentToChild);
  }

  ngAfterViewInit(): void {
    console.log("Child After view init.");
  }

}
