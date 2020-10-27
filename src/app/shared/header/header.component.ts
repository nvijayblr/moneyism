import { Component, OnInit, OnDestroy, HostListener, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { CommonService } from '../../services/common.service';
import { Subscription } from 'rxjs';
import { MessageService } from '../../services/message.service';
import { AuthGuardService } from '../../services/auth-guard.service';
import { HttpService } from '../../services/http-service.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;

  isSticky = false;
  isHidden = false;
  prevOffset = 0;
  categories = [];
  categoryName = '';
  user: any = {};
  subscription: Subscription;
  commonSub: Subscription;
  isUserLoggedIn = false;
  search: any = {};
  searchOptions = [{
    value: 'profession',
    title: 'Professions'
  }, {
    value: 'zipcode',
    title: 'Porfessional by Zipcode'
  }, {
    value: 'deals',
    title: 'Deals'
  }, {
    value: 'email',
    title: 'Email'
  }, {
    value: 'phoneno',
    title: 'Phoneno'
  }, {
    value: 'firstname',
    title: 'Firstname'
  }];

  @HostListener('window:scroll')
  checkScroll() {
    const curOffset = window.pageYOffset;
    this.isSticky = curOffset >= 100;
    if (curOffset >= 300 && (curOffset > this.prevOffset)) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.prevOffset = curOffset;
  }

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public common: CommonService,
    private router: Router,
    private http: HttpService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private authGuardService: AuthGuardService,
    private socialAuthService: SocialAuthService) {
      this.categories = this.common.categories;
    }

  ngOnInit() {
    // console.log(this.categoryName, this.authGuardService.getLoggedInUserDetails());
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.router.events.subscribe(params => {
      // console.log(this.router.routerState.root);
      // this.categoryName = params.categoryId;
    });
    this.subscription = this.messageService.getLoginMessage().subscribe(user => {
      this.user = user;
    });
    this.commonSub = this.messageService.getCommonMessage().subscribe(message => {
      if (message.topic === 'logout') {
        this.doLogout();
      }
      if (message.topic === 'showLogin' ) {
        this.doLogin('create');
      }
      if (message.topic === 'categoryLoaded') {
        this.categories = this.common.categories;
      }
    });
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.search = queryParams;
      this.searchForm = this.fb.group({
        option: [this.search.option ? this.search.option : 'profession'],
        q: [this.search.q ? this.search.q : ''],
        location: [this.search.location ? this.search.location : ''],
      });
    });

  }

  initSearch() {
    this.router.navigate([`/auth/search`], {queryParams: this.searchForm.value});
  }

  doLogin(option) {
    // const dialogRef = this.dialog.open(LoginSignupComponent, {
    //   width: '700px',
    //   panelClass: ['login-singup'],
    //   disableClose: true,
    //   data: {mode: 'login', option}
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    //   this.user = this.authGuardService.getLoggedInUserDetails();
    // });
  }

  doLogout() {
    const userSession = this.authGuardService.getLoggedUser();
    if (userSession.isSocial) {
      this.socialAuthService.signOut();
    }
    this.user.isLoggedIn = false;
    this.isUserLoggedIn = false;
    localStorage.removeItem('moneyism_token');
    this.router.navigate([`/login`]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.commonSub.unsubscribe();
  }

}
