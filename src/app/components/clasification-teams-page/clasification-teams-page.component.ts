import { Component, inject } from '@angular/core';
import { Driver } from '../../models/driver.model';
import { Team } from '../../models/team.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clasification-teams-page',
  templateUrl: './clasification-teams-page.component.html',
  styleUrl: './clasification-teams-page.component.css'
})
export class ClasificationTeamsPageComponent {
  http = inject(HttpClient);
  drivers: Driver[] = [];
  teams: Team[] = [];

  ngOnInit() {
    this.http.get<Driver[]>('https://api.openf1.org/v1/drivers')
      .subscribe((data: any) => {
        for (const driver of data) {
          if (this.drivers.length < 20 &&
              driver.first_name !== 'Felipe' &&
              this.drivers.findIndex(d => d.first_name === driver.first_name) === -1) {
            this.drivers.push(driver);
          }
        }

        for (const driver of this.drivers) {
          if (this.teams.length < 10 &&
            this.teams.findIndex(t => t.team_name === driver.team_name) === -1) {
            this.teams.push({
              team_name: driver.team_name, team_colour: driver.team_colour,
              headshot_url: ''
            });
          }
        }
      });
  }
}
