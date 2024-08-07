import { Component, Input } from '@angular/core';
import { Driver } from '../../models/driver.model';

@Component({
  selector: 'app-clasification',
  templateUrl: './clasification.component.html',
  styleUrl: './clasification.component.css'
})
export class ClasificationComponent {
  @Input() driver!: Driver;
}
