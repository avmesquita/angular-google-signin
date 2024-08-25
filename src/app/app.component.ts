import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleSigninComponent } from './components/google-signin/google-signin.component';
import { GoogleSigninButtonDirective } from '@abacritt/angularx-social-login';

declare var gapi: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GoogleSigninComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'app';

  constructor() {
    
  }



}
