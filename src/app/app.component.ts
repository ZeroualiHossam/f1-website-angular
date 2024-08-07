import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Driver } from './models/driver.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebF1';
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
