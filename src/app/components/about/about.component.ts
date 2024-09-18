import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  text: string = 'lalallaa'

  expanded: boolean = true;   // Controla se o texto está expandido ou não
  constructor() { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }
  toggleExpand() {
    this.expanded = !this.expanded;
  }

}
