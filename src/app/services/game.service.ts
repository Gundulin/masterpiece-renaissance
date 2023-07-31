import { Injectable } from '@angular/core';

export interface Player {
  name: string;
  color: string;
  position: number;
  order: number;
}

export interface BoardSpace {
  description: string;
  index: number;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  /**
   * Rolls a simulated die and returns the result
   * @param numSides number of sides of the die
   * @returns a random number that is greater than 0 and less than or equal to the number of sides on the die
   */
  rollSidedDie(numSides: number = 6): number {
    return Math.floor(Math.random() * numSides) + 1;
  }

  /**
   * Rolls a dice and adds that number to the inserted currentPosition
   * @param currentPosition the current index of the player
   * @param numBoardSpaces the number of spaces on the board
   * @returns the next index of the player's piece as a number
   */
  getPlayerNextPiecePosition(currentPosition: number, numBoardSpaces: number): number {
    return (currentPosition + this.rollSidedDie()) % numBoardSpaces;
  }

  /**
   * Generates a random number based on the number of players to choose the first player at random.
   * @param numPlayers the number of players
   * @returns index of the starting player
   */
  selectRandomFirstPlayer(numPlayers: number): number {
    return Math.floor(Math.random() * numPlayers);
  }

  /**
   * Gets the board game spaces for Masterpiece
   * @returns an array of BoardSpace objects populated with the Masterpiece boardgame spaces
   */
  getBoardSpaces(): BoardSpace[] {
    return [{
        description: 'Private Auction',
        index: 0
      },
      {
        description: 'May buy a painting from the bank for $4,000,000',
        index: 1
      },
      {
        description: 'Collect $3,000,000 or a description card',
        index: 2
      },
      {
        description: 'Bank Auction',
        index: 3
      },
      {
        description: 'Private Auction',
        index: 4
      },
      {
        description: 'May buy a painting from the bank for $3,500,000',
        index: 5
      },
      {
        description: 'May sell any painting to the bank',
        index: 6
      },
      {
        description: 'Collect $3,000,000 or a description card',
        index: 7
      },
      {
        description: 'Sell a painting to the bank for $3,500,000',
        index: 8
      },
      {
        description: 'May sell any painting to the bank',
        index: 9
      },
      {
        description: 'Bank Auction',
        index: 10
      },
      {
        description: 'Private Auction',
        index: 11
      },
      {
        description: 'May sell any painting to the bank',
        index: 12
      },
      {
        description: 'May buy a painting from the bank for $3,000,000',
        index: 13
      },
      {
        description: 'Collect $3,000,000 or a description card',
        index: 14
      },
      {
        description: 'Bank Auction',
        index: 15
      },
      {
        description: 'May sell any painting to the bank',
        index: 16
      },
      {
        description: 'May buy a painting from the bank for $2,500,000',
        index: 17
      },
      {
        description: 'Bank Auction',
        index: 18
      },
      {
        description: 'May buy a painting from the bank for $4,000,000',
        index: 19
      },
      {
        description: 'Private Auction',
        index: 20
      },
      {
        description: 'May sell any painting to the bank',
        index: 21
      },
      {
        description: 'May buy a painting from any player for $3,500,000',
        index: 22
      },
      {
        description: 'Collect $3,000,000 or a description card',
        index: 23
      },
      {
        description: 'Bank Auction',
        index: 24
      },
      {
        description: 'May buy a painting from any player for $3,500,000',
        index: 25
      },
      {
        description: 'Sell a painting to the bank for $3,500,000',
        index: 26
      },
      {
        description: 'Inherit a painting from the bank',
        index: 27
      },
      {
        description: 'Collect $3,000,000 or a description card',
        index: 28
      },
      {
        description: 'May sell any painting to the bank',
        index: 29
      }];
  }
}
