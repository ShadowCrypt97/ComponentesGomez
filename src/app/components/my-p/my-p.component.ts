import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-p',
  template: `
    <p style="font-weight=200">
      <ng-content></ng-content>
    </p>
  `,
  styles: [
  ]
})
export class MyPComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
