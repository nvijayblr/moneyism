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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  otpForm: FormGroup;
  user: SocialUser;
  isSubmitted = false;
  isLoading = false;
  errorMessage = '';
  mode = 'login';
  isOtpScreen = false;
  isConfirmPasswordError = false;

  ngoList: any = {
    ngoSectors: [],
    ngoTypes: []
  };

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

    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneno: ['', Validators.required],
      firstname: ['', Validators.required],
      middlename: [''],
      surname: ['', [Validators.required, Validators.maxLength(50)]],
    });

    // this.otpForm = this.fb.group({
    //   username: [''],
    //   token: ['', Validators.required]
    // });
  }


  doSignup() {
    this.isSubmitted = true;
    this.isConfirmPasswordError = false;
    const signup = {...this.signupForm.value};
    if (this.signupForm.invalid) {
      return;
    }

    if (signup.password !== signup.confirm_password) {
      this.isConfirmPasswordError = true;
      return;
    }
    delete signup.confirm_password;
    this.isLoading = true;
    this.http.signupRequest(this.signupForm.value).subscribe((result: any) => {
      this.isLoading = false;
      // this.isOtpScreen = true;
      // const { username, password } = this.signupForm.value;
      // this.otpForm.controls.password.setValue(password);
      this.errorMessage = '';
      this.setLoginSessionAndRouting(result, false);
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = error.error.message ? error.error.message : 'The username or email or phone number already found.';
    });
  }


  validateOtp() {
    if (this.otpForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.http.validateOTP(this.otpForm.value).subscribe((result: any) => {
      this.isLoading = false;
      this.errorMessage = '';
      // this.doLogin();
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = 'Invalid OTP. Please try again.';
    });
  }

  resendOtp() {
    this.isLoading = true;
    this.http.resendOTP(this.otpForm.controls.UserName.value).subscribe((result: any) => {
      this.isLoading = false;
      this.errorMessage = '';
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = error.error.ResponseMsg;
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
    this.router.navigate([`/auth/home`]);
    // if (this.data.option === 'create') {
    //   this.router.navigate(['/ce-fundraiser'], {queryParams: {c: 't'}});
    // } else {
    //   this.router.navigate([`/personal/${result.UserId}`]);
    // }
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
