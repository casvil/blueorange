import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `BlueOrange's Application`;
  values = '';

  onKey(event: any) {
    this.values = event.target.value;
    console.log(this.values)
  }
}
