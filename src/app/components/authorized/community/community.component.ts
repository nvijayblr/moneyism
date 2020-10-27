import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { MessageService } from '../../../services/message.service';
import { appConfig } from '../../../app.config';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit, OnDestroy {

  isLoading = false;

  user: any = {};
  professional: any = {};
  userId: any = '';
  isUserLoggedIn = false;
  isEditMode = false;
  appConfig: any = {};
  isCurrentUser = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authGuardService: AuthGuardService,
    private messageService: MessageService) {
      this.appConfig = appConfig;
    }

  ngOnInit() {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.id;
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.isCurrentUser = true;
      if (queryParams.id) {
        if (this.userId !== queryParams.id) {
          this.isCurrentUser = false;
        }
        this.userId = queryParams.id;
      }
      // this.getUsersProfessionalDetails();
    });

  }

  getUsersProfessionalDetails() {
    this.isLoading = true;
    this.http.getProfessionalDetails(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.professional = result;
    }, (error) => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.http.cancelGetProfessionalDetails();
  }

}


