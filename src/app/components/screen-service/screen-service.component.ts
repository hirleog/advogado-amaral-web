import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-screen-service',
  templateUrl: './screen-service.component.html',
  styleUrls: ['./screen-service.component.css']
})
export class ScreenServiceComponent implements OnInit, AfterViewInit {
  @ViewChild('body') body!: ElementRef;

  ngAfterViewInit() {

  }
  public dayNight: any;
  constructor() {
  }



  ngOnInit(): void {


  }

}
