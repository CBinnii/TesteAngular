import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	currentUser: User;

	constructor( private router: Router, private authenticationService: AuthenticationService ) {
		this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
	}
	
	ngOnInit(): void {
	}

	logout() {
		this.authenticationService.logout();
		this.router.navigate(['/login']);
	}

}
