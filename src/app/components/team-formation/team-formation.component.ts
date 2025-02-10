import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from "../../Shared/loading/loading.component";
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-formation',
  imports: [LoadingComponent,CommonModule],
  templateUrl: './team-formation.component.html',
  styleUrl: './team-formation.component.css'
})
export class TeamFormationComponent implements OnInit{

  team: any;
  isloading = true;

  constructor(private teamService: TeamService,private route: ActivatedRoute
  ) { }
  
    ngOnInit(): void {
  
      let id=0;
      this.route.params.subscribe(params => {
        id = params['id'];
      });
  
      this.teamService.getTeam(id).subscribe({
        next: (res) => {
          this.team = res;
          console.log(res);
          this.isloading = false;
        },
        error: (err) => {
          console.error('Error fetching data:', err);
        }
      }
        
      );
    }
}
