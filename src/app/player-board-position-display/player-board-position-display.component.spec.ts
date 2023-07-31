import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBoardPositionDisplayComponent } from './player-board-position-display.component';

describe('PlayerBoardPositionDisplayComponent', () => {
  let component: PlayerBoardPositionDisplayComponent;
  let fixture: ComponentFixture<PlayerBoardPositionDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerBoardPositionDisplayComponent]
    });
    fixture = TestBed.createComponent(PlayerBoardPositionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
