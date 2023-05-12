import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit{
  ngOnInit() {

  }

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ]

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower'
  ]

  
}
