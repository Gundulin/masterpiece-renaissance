import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BoardSpace, Player } from '../services/game.service';

interface PlayerForm {
  name: FormControl<string | null>,
  color: FormControl<string | null>,
  position: FormControl<BoardSpace| null>,
  order: FormControl<number | null>
}

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit { 

  @Input()
  public boardSpaces: BoardSpace[] | undefined;

  @Output()
  public playerList: EventEmitter<Player[]>

  public players: Player[] = [];
  public playerForm: FormArray<FormGroup<PlayerForm>>;
  public form: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {
    this.playerForm = new FormArray<FormGroup<PlayerForm>>([]);
    this.playerList = new EventEmitter<Player[]>;
    this.form = this.fb.group(this.playerList);
  }


  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.addPlayer()
  }

  addPlayer() {
    const order = this.getNextPlayerOrder();

    this.playerForm.push(new FormGroup<PlayerForm>(
      {
        name: new FormControl<string | null>('', [Validators.minLength(3), Validators.required, Validators.maxLength(24)]),
        color: new FormControl<string | null>('blue'),
        position: new FormControl<BoardSpace | null>({
          description: 'Private Auction',
          index: 0
        } as BoardSpace),
        order: new FormControl<number | null>(order)
      }
    ))
  }

  removePlayer(index: number): void {
    this.playerForm.removeAt(index);
  }

  getLastPlayerOrder(): number {
    if (this.playerForm.length < 1) {
      return 0;
    }
    return this.playerForm.at(this.playerForm.length - 1)?.get('order')?.value as number;
  }

  getNextPlayerOrder(): number {
    return this.getLastPlayerOrder() + 1;
  }

  translatePlayerFormToPlayer(playerForm: PlayerForm): Player {
    return {
      name: playerForm.name.value,
      color: playerForm.color.value,
      order: playerForm.order.value,
      position: (playerForm.position.value as unknown as BoardSpace).index // FIXME: the value seems to be the index and is coming out undefined. 
    } as Player;
  }

  submit(): void {
    this.playerForm.controls.forEach(pFormGroup => {
      this.players.push(this.translatePlayerFormToPlayer(pFormGroup.controls));
    });
    this.playerList.emit(this.players);
  }

  isReadyToPlay(): boolean {
    if (this.playerForm.controls.length > 2 && this.playerForm.valid) {
      return true;
    }
    return false;
  }


}
