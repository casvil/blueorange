import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  values = '';

  constructor() { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.values = event.target.value;
    console.log(this.values)
  }
}
