import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { maindashboard } from './maindashboard/maindashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, maindashboard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InvestKaro';
}
