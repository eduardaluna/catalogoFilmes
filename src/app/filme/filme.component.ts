import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent implements OnInit {

  constructor() { }

  @Input() filme : any;

  ngOnInit(): void {
  }

}
