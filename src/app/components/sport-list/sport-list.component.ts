import { Component, OnInit } from '@angular/core';
import { SportService } from '../../services/sport.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sport-list',
    standalone: true,
    templateUrl: './sport-list.component.html',
    styleUrls: ['./sport-list.component.css'],
    imports: [CommonModule]
})
export class SportListComponent implements OnInit {
  sports: any[] = [];

  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.sportService.getSports().subscribe(
      (data) => {
        this.sports = data;
      },
      (error) => {
        console.error('Error fetching sports:', error);
      }
    );
  }
}
