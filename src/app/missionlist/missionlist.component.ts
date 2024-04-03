import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: any[] = [];
  filteredLaunches: any[] = [];

  constructor(private spacexService: SpacexService) { }

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe(data => {
      this.launches = data;
      this.filteredLaunches = data; // Initially, filtered launches are the same as all launches
    });
  }

  onSearchYear(searchYear: string): void {
    if (!searchYear) {
      this.filteredLaunches = this.launches; // If no search year is provided, show all launches
    } else {
      this.filteredLaunches = this.launches.filter(launch =>
        launch.launch_year === searchYear.trim());
    }
  }
}
