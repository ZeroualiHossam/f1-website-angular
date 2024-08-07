import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from './../../models/driver.model';

@Component({
  selector: 'app-driver-page',
  templateUrl: './driver-page.component.html',
  styleUrl: './driver-page.component.css'
})
export class DriverPageComponent {

  http = inject(HttpClient);
  drivers: Driver[] = [];

  ngOnInit() {
    this.http.get<Driver[]>('https://api.openf1.org/v1/drivers')
      .subscribe((data) => {
        for (const driver of data) {
          if (this.drivers.length < 20 &&
              driver.first_name !== 'Felipe' &&
              this.drivers.findIndex(d => d.first_name === driver.first_name) === -1) {
            this.drivers.push(driver);
          }
        }
      });
  }

}
