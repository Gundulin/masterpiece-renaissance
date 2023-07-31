import { Component, OnInit, Input } from '@angular/core';
import { BoardSpace, GameService, Player } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  isGameStart: boolean = false;
  nextPlayerIndex: number = 1;
  prevPlayerIndex: number = 0;
  currentPlayerIndex: number = 0;
  firstTurn: boolean = true;

  players: Player[] = [];

  boardSpaces: BoardSpace[] = [];

  constructor(private gameService: GameService) {
    this.boardSpaces = this.gameService.getBoardSpaces();
  }

  ngOnInit() {
    
  }

  loadPlayersAndStartGame(players: Player[]): void {
    console.log(players);
    console.log('started the game');
    console.log(this.boardSpaces)
    this.players = players;
    setTimeout(() => {
      this.initiatePlayerIndicesAndStartGame();
    }, 300);
  }

  advancePlayerIndices() {
    if (this.firstTurn) {
      this.firstTurn = !this.firstTurn;
    }
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    this.nextPlayerIndex = (this.nextPlayerIndex + 1) % this.players.length;
    this.prevPlayerIndex = (this.prevPlayerIndex + 1) % this.players.length;
  }

  getCurrentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }

  getPrevPlayer(): Player {
    return this.players[this.prevPlayerIndex];
  }

  getNextPlayer(): Player {
    return this.players[this.nextPlayerIndex];
  }

  rollDiceAndAdvancePlayer(): void {
    const player: Player = this.getCurrentPlayer();
    const newPlayerPos = this.gameService.getPlayerNextPiecePosition(player.position, this.boardSpaces.length);
    player.position = newPlayerPos;
  }

  initiatePlayerIndicesAndStartGame(): void {
    this.currentPlayerIndex = 0;
    this.prevPlayerIndex = this.players.length - 1;
    this.nextPlayerIndex = 1;
    this.isGameStart = true;
  }

  activateTest(): void {
    this.loadTestData();
    this.initiatePlayerIndicesAndStartGame();
  }

  loadTestData(): void {
    this.players = [{
      name: 'Player 1 Red',
      position: 0,
      order: 0,
      color: 'red'
    },
    {
      name: 'Player 2 Blue',
      position: 0,
      order: 1,
      color: 'blue'
    },
    {
      name: 'Player 3',
      position: 0,
      order: 2,
      color: 'blue'
    },
    {
      name: 'Player 4',
      position: 0,
      order: 3,
      color: 'blue'
    },
    {
      name: 'Player 5',
      position: 0,
      order: 4,
      color: 'blue'
    },
    {
      name: 'Player 6',
      position: 0,
      order: 5,
      color: 'blue'
    }];
  }



  

}
