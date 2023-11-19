import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  interval;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;

  onStartGame() {
  this.interval = setInterval(() =>{
  this.intervalFired.emit(this.lastNumber+1);
  this.lastNumber ++
  },1000)
  }

  onPauseGame() {
    clearInterval(this.interval)
  }

}
