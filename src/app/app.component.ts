import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Gallery', url: '/gallery', icon: 'image-otline' },
    
  ];
  public labels = [];
  constructor() {}
}
