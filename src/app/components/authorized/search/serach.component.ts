import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../services/http-service.service';
import { MatPaginatorIntl } from '@angular/material';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { MessageService } from '../../../services/message.service';
import { appConfig } from '../../../app.config';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.scss']
})
export class SerachComponent implements OnInit {

  isLoading = true;

  user: any = {};
  search: any = {};
  professionsList = [];
  dealsList = [];
  userId: any = '';
  isUserLoggedIn = false;
  isEditMode = false;
  appConfig: any = {};
  openDeals = [];
  loaderMsg = 'Loading search results...';

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
    this.initOpenDeails();
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.search = queryParams;
      if (this.search.option === 'deals') {
        this.initDealsSearch(this.search);
      } else {
        this.initProfessionalsSearch(this.search);
      }
    });
  }

  initDealsSearch(search) {
    this.isLoading = true;
    this.professionsList = [];
    this.http.getDealsSearch(search).subscribe((result: any) => {
      this.isLoading = false;
      this.dealsList = result ? result : [];
    }, (error) => {
      this.isLoading = false;
    });
  }

  initProfessionalsSearch(search) {
    this.isLoading = true;
    this.dealsList = [];
    this.http.getProfessionsSearch(search).subscribe((result: any) => {
      this.isLoading = false;
      this.professionsList = result ? result : [];
    }, (error) => {
      this.isLoading = false;
    });
  }

  // Get users open deals list
  initOpenDeails() {
    this.openDeals = [];
    this.http.getDealsByStatus(this.userId, 'New').subscribe((result: any) => {
      this.openDeals = result ? result : [];
    }, (error) => {
    });
  }

  showRequestComment(deals, isShow) {
    deals.req_description = '';
    deals.showComment = isShow;
  }

  onRequestDeals(deals) {
    this.isLoading = true;
    this.loaderMsg = 'Sending your request...';
    const payload = {
        deal_id: deals.id,
        user_id: this.userId,
        req_description: deals.req_description
    };
    this.http.sendRequestDeal(payload).subscribe((result: any) => {
      this.isLoading = false;
      deals.showComment = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  showAssignDealComment(profession, isShow) {
    profession.req_description = '';
    profession.selectedDeal = {};
    profession.showComment = isShow;
  }

  onAssignDeals(profession) {
    this.isLoading = true;
    this.loaderMsg = 'Assigning deal...';
    const payload = {
        deal_id: profession.selectedDeal.id,
        user_id: this.userId,
        description: profession.comment,
        status: 'Assigned',
        assigned_userId: profession.id,
    };
    this.http.updateDealsStatus(payload).subscribe((result: any) => {
      profession.showComment = false;
      this.isLoading = false;
      this.initOpenDeails();
    }, (error) => {
      this.isLoading = false;
    });
  }

  isImage(path) {
    if (path && path.indexOf('.jpg') > 0 || path.indexOf('.jpeg') > 0 || path.indexOf('.png') > 0 || path.indexOf('.gif') > 0) {
      return true;
    }
    return false;
  }

  isFile(path) {
    if (!path) {
      return false;
    }
    if (path && path.indexOf('.jpg') < 0 && path.indexOf('.jpeg') < 0 && path.indexOf('.png') < 0 && path.indexOf('.gif') < 0) {
      return true;
    }
    return false;
  }

}
