import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
// components are loaded via the router; no direct imports needed here
@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bin-nav');
}
