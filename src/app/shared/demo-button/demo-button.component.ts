import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-button',
  templateUrl: './demo-button.component.html',
  styleUrls: ['./demo-button.component.scss']
})
export class DemoButtonComponent implements OnInit {
  @Input() origin: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
