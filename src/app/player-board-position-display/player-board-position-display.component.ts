import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player-board-position-display',
  templateUrl: './player-board-position-display.component.html',
  styleUrls: ['./player-board-position-display.component.scss']
})
export class PlayerBoardPositionDisplayComponent {

  @Input()
  playerName = 'Player Name';

  @Input()
  message = 'This is the default message';

  @Input()
  size = 'small';

  @Input()
  color = 'red';

  @Input()
  playerPos = 'current player';

  @Input()
  isCurrentPlayer = false;

  @Output()
  rollDiceEmitter = new EventEmitter;

  @Output()
  endTurnEmitter = new EventEmitter;

  rollTheDice() {
    this.rollDiceEmitter.emit();
  }

  endTheTurn() {
    this.endTurnEmitter.emit();
  }
}
