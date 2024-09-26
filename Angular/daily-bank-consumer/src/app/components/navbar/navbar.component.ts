import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  username :string='';
  isUserLoggedIn:boolean=false; 
  
  //DI of of authentication service using constructor
  constructor(public authService: AuthenticationService) {  }
  
  ngOnInit() {
    // Subscribe to userName$ observable to get updates dynamically
    this.authService.userName$.subscribe((userId: string) => {
      this.username = userId;
      this.isUserLoggedIn = this.authService.isLoggedIn();
    });
  }

  handleLogout(){
    this.authService.logout();
  }
}
