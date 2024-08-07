import { Component, Input } from '@angular/core';
import { Driver } from './../../models/driver.model';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent {
  @Input() driver!: Driver;
}
