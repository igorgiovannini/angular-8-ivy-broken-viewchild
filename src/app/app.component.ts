import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portal-ivy';
  @ViewChild('test')
  test: ElementRef;

  ngOnInit() {
    this.test.nativeElement.style.color = 'blue';
  }
}
