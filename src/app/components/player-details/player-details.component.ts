import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../../Shared/loading/loading.component";
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-player-details',
  imports: [
    CommonModule,
    LoadingComponent
],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent implements OnInit {

  player: any;
  isloading: boolean = true;
  constructor(private playerService: PlayerService,
    private route: ActivatedRoute,
  private teamservices: TeamService) { }
  
    ngOnInit(): void {
  
      let id=0;
      this.route.params.subscribe(params => {
        id = params['id'];
      });
  
      this.playerService.getPlayer(id).subscribe({
        next: (res) => {
          this.player = res;
          console.log(res);
          this.Getplayerteam(res.team);
          
        },
        error: (err) => {
          console.error('Error fetching data:', err);
        }
      }
        
      );
    }
    calculateAge(birthdate: string): number {
      const birthDate = new Date(birthdate);
      if (isNaN(birthDate.getTime())) {
        console.error('Invalid date format');
        return NaN;
      }
    
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
    
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
    
      return age;
    }
    Getplayerteam(team: number) {
      let teamname='';
      this.teamservices.getTeam(team).subscribe({
        next: (res) => {
          this.player.team = res.name;
          // console.log(res);
          this.isloading = false;
        },
        error: (err) => {
          console.error('Error fetching data:', err);
        }
    });
  }
  
}
