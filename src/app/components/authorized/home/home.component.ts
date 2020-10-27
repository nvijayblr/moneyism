import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../../services/auth-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: any = {};
  constructor(private authGuardService: AuthGuardService, ) {
    this.user = this.authGuardService.getLoggedInUserDetails();
  }

  ngOnInit() {
  }

}
