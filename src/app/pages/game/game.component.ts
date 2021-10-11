import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game:any;
  @Output() addedToFavorites = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addToFavorites(game:any){
    console.log(game.title)
    this.addedToFavorites.emit(game);
  }
}
