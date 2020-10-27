import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthGuardService } from '../../services/auth-guard.service';
import { MessageService } from '../../services/message.service';
import { HttpService } from '../../services/http-service.service';
import { appConfig } from '../../app.config';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountDetailsComponent implements OnInit, OnDestroy {
  user: any = {};
  userId = '';
  isCurrentUser = false;
  appConfig: any = {};
  subscription: Subscription;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,    private authGuardService: AuthGuardService,
    private messageService: MessageService
  ) {
    this.appConfig = appConfig;
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.id;
  }

  ngOnInit() {
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.subscription = this.messageService.getLoginMessage().subscribe(user => {
      this.user = user;
    });

    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.isCurrentUser = true;
      if (queryParams.id) {
        if (this.userId !== queryParams.id) {
          this.isCurrentUser = false;
        }
        this.user = {};
        this.userId = queryParams.id;
      }
      this.getUserAccount();
    });

  }

  getUserAccount() {
    this.isLoading = true;
    this.http.getAccountDetails(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.user = result;
    }, (error) => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
