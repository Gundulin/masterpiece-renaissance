import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface RolledDiceEmission {

}

export interface EndTurnEmission {

}

@Component({
  selector: 'app-player-board-position-display',
  templateUrl: './player-board-position-display.component.html',
  styleUrls: ['./player-board-position-display.component.scss']
})
export class PlayerBoardPositionDisplayComponent {

  @Input()
  playerName: string = 'Player Name';

  @Input()
  message: string = 'This is the default message';

  @Input()
  size = 'small';

  @Input()
  color = 'red';

  @Input()
  playerPos: string = 'current player';

  @Input()
  isCurrentPlayer: boolean = false;

  @Output()
  rollDiceEmitter = new EventEmitter<RolledDiceEmission>;

  @Output()
  endTurnEmitter = new EventEmitter<EndTurnEmission>

  rollTheDice() {
    this.rollDiceEmitter.emit();
  }

  endTheTurn() {
    this.endTurnEmitter.emit();
  }
}
