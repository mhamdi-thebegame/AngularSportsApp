import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom  } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { SportService } from './services/sport.service';
import { TeamService } from './services/team.service';
import { PlayerService } from './services/player.service';
import { MatchService } from './services/match.service';
import { LeagueService } from './services/league.service';
import { CommonModule, DatePipe } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    importProvidersFrom(CommonModule,HttpClientModule),
    DatePipe ,
    SportService,
    TeamService,
    PlayerService,
    MatchService,
    LeagueService,
  ]
};
