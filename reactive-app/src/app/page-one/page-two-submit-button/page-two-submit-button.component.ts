import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-two-submit-button',
  templateUrl: './page-two-submit-button.component.html',
  styleUrls: ['./page-two-submit-button.component.css']
})
export class PageTwoSubmitButtonComponent implements OnInit {

  constructor() { }

  @Input() firstName: string;

  ngOnInit() {
  }

}
