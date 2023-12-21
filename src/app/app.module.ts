import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { GameComponent } from './game/game.component';
import { PlayerBoardPositionDisplayComponent } from './player-board-position-display/player-board-position-display.component';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ColorPickerModule } from 'primeng/colorpicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ButtonModule } from 'primeng/button';
import { ValueChartComponent } from './value-chart/value-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    GameComponent,
    PlayerBoardPositionDisplayComponent,
    ValueChartComponent,
  ],
  imports: [
    BrowserModule,
    FieldsetModule,
    CardModule,
    ReactiveFormsModule,
    DropdownModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
