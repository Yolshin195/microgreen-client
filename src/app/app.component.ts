import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microgreen';
  constructor(public appService: AppService, private router: Router) {}

  logout() {
    this.appService.logout(() => {
      this.router.navigateByUrl("/");
    })
  }
}
