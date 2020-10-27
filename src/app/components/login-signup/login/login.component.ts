import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin, Subscriber } from 'rxjs';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { HttpService } from '../../../services/http-service.service';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: SocialUser;
  isSubmitted = false;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private socialAuthService: SocialAuthService,
    private http: HttpService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      if (!user) {
        return;
      }
      this.user = user;
      this.doSocialLogin(this.user);
    });

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  doLogin() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.http.loginRequest(this.loginForm.value).subscribe((result: any) => {
      this.isLoading = false;
      this.setLoginSessionAndRouting(result);
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = error.error.message ? error.error.message : 'Invalid username or passowrd.';
    });
  }

  reloadCurrentRoute() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([location.pathname]));
  }

  doSocialLogin(user) {
    let payload = {};
    if (user.provider === 'GOOGLE') {
      payload = {
        userName: user.email,
        FirstName: user.firstName,
        LastName: user.lastName,
        DPPath: user.photoUrl,
        provider: user.provider,
        AId: user.id,
      };
    } else {
      payload = {
        userName: user.email,
        FirstName: user.firstName,
        LastName: user.lastName,
        DPPath: user.photoUrl,
        provider: user.provider,
        AId: user.id,
      };
    }
    this.isSubmitted = true;
    this.isLoading = true;
    this.http.socialLoginRequest(payload).subscribe((result: any) => {
      this.isLoading = false;
      this.setLoginSessionAndRouting(result, true);
      this.reloadCurrentRoute();
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = error.error.ResponseMsg;
    });
  }

  setLoginSessionAndRouting(result, isSocial?) {
    const session = {
      ...result,
      isLoggedIn: true,
      isSocial
    };
    localStorage.setItem('moneyism_token', JSON.stringify(session));
    this.messageService.sendLoginMessage(session);
    this.router.navigate([`auth/home`]);
  }

  signInWithGoogle(): void {
    const fbLoginOptions = {
      scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages'
    }; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    const googleLoginOptions = {
      scope: 'https://www.googleapis.com/auth/userinfo.email'
    }; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }

}
