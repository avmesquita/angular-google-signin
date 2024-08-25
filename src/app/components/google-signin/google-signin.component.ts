import { 
  GoogleLoginProvider, 
  GoogleSigninButtonDirective, 
  SocialAuthService, 
  SocialAuthServiceConfig, 
  SocialLoginModule,
  GoogleSigninButtonModule,  
  SocialUser} from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-google-signin',
  standalone: true,
  imports: [ CommonModule, SocialLoginModule, GoogleSigninButtonModule ],
  templateUrl: './google-signin.component.html',
  styleUrl: './google-signin.component.scss',
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleClientID, {
              scopes: 'openid profile email',
            }),
          },
        ],
        onSuccess: () => {
          console.log('success');
        },
        onError: (err: any) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
    SocialAuthService,
    GoogleSigninButtonDirective
  ]  

})
export class GoogleSigninComponent implements OnInit, OnDestroy {

  user?:any;
  
  constructor(private socialAuthService: SocialAuthService) {
  }

  ngOnDestroy(): void {
    this.socialAuthService.signOut();    
  }

  async ngOnInit() {
    this.socialAuthService.authState.subscribe( (user:SocialUser) => {
      this.user = user;
      /* Include your authentication method here */
      console.log("user => ", user);
    },(error: any) => {
      console.log(error);
    });
  }

  async signout() {
    this.socialAuthService.signOut();
  }

}
