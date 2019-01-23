import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ViewChildComComponent } from '../view-child-com/view-child-com.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements AfterViewInit {


  @ViewChild("numberElement") numberElement: ElementRef;
  @ViewChild(ViewChildComComponent) viewChildComComponent;
  @ViewChild("view_child_com") viewChildComComponentWReference;
  @ViewChild("pElement") pElement: ElementRef;
  @ViewChild("view_child_com_el", {read: ElementRef}) viewChildComComponentEl;

  ngAfterViewInit(): void {
    console.log(this.numberElement);
    console.log(this.viewChildComComponent.getNums());
    console.log(this.viewChildComComponentWReference);
    console.log(this.pElement.nativeElement);
    console.log(this.viewChildComComponentEl);



  }

  changeTheName() {
    this.viewChildComComponent.name = "BOOO!";
  }

}
