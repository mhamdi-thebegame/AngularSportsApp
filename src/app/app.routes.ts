import { RouterModule, Routes } from '@angular/router';
import { SportListComponent } from './components/sport-list/sport-list.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { Component, NgModule } from '@angular/core';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { TeamFormationComponent } from './components/team-formation/team-formation.component';

export const routes: Routes = [
  { path: 'sports', component: SportListComponent },
  { path: 'teams', component: TeamListComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'matches', component: MatchListComponent },
  { path: 'leagues', component: LeagueListComponent },
  {path:'team/:id',component:TeamDetailsComponent},
  {path:'player/:id',component:PlayerDetailsComponent},
  { path: '', redirectTo: '/matches', pathMatch: 'full' },
  {path:'team-formation/:id',component:TeamFormationComponent}
];
