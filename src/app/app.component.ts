import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'userManagnemt';
  constructor(private router: Router) { }
  redirectToList() {
    this.router.navigate(['/user/list']);
  }
  redirectAdd() {
    this.router.navigate(['/user/upsert']);
  }
}
