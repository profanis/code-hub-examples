import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child-com',
  templateUrl: './view-child-com.component.html',
  styleUrls: ['./view-child-com.component.scss']
})
export class ViewChildComComponent {
  name = "app-view-child-com";

  getNums(): number[] {
    return [1,2,3,4,5];
  }

}
