import { Component, OnInit } from '@angular/core';
import { AdvancedDiService } from '../advanced-di.service';

@Component({
  selector: 'app-advanced-ci',
  templateUrl: './advanced-ci.component.html',
  styleUrls: ['./advanced-ci.component.scss']
})
export class AdvancedCiComponent implements OnInit {

  constructor(private advancedDiService: AdvancedDiService) { }

  ngOnInit() {
    this.advancedDiService.foo = (this.advancedDiService.foo || "") + "bar";
  }

}
