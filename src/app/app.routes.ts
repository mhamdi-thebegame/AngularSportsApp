import { RouterModule, Routes } from '@angular/router';
import { SportListComponent } from './components/sport-list/sport-list.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'sports', component: SportListComponent },
  { path: 'teams', component: TeamListComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'matches', component: MatchListComponent },
  { path: 'leagues', component: LeagueListComponent },
  { path: '', redirectTo: '/matches', pathMatch: 'full' },
];
