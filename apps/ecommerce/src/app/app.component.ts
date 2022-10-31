import { Component } from '@angular/core';

@Component({
  selector: 'demo-componentes-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  creator = 'ecommerce';

  public changeCreator(){
    this.creator = "fooo";
  }
}
