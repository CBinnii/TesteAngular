import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/_services/alert.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;
	loading = false;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authenticationService: AuthenticationService,
		private userService: UserService,
		private alertService: AlertService
	) { 
		// redirect to home if already logged in
		if (this.authenticationService.currentUserValue) { 
			this.router.navigate(['/']);
		}
	}

	ngOnInit() {
		this.registerForm = this.formBuilder.group({
			nome: ['', Validators.required],
			email: ['', Validators.required],
			username: ['', Validators.required],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
	}

	get f() { return this.registerForm.controls; }

	onSubmit() {
		this.submitted = true;

		if (this.registerForm.invalid) {
			return;
		}

		this.loading = true;
		this.userService.register(this.registerForm.value)
			.pipe(first())
			.subscribe(
				data => {
					this.alertService.success('Registrado com sucesso!', true);
					this.router.navigate(['/login']);
				},
				error => {
					this.alertService.error(error);
					this.loading = false;
				});
	}
}
