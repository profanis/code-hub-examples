import { Component, OnInit } from '@angular/core';
import { PipeDataService } from '../pipe-data.service';
import { BuiltInPipeModel } from '../built-in-pipe.model';

@Component({
  selector: 'app-pipe-solution',
  templateUrl: './pipe-solution.component.html',
  styleUrls: ['./pipe-solution.component.scss']
})
export class PipeSolutionComponent implements OnInit {
  data: BuiltInPipeModel;

  constructor(private pipeDataService: PipeDataService) { }

  ngOnInit() {
    this.data = this.pipeDataService.getData();
  }

}
