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
	nome: string[] = [];

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authenticationService: AuthenticationService,
		private userService: UserService,
		private alertService: AlertService
	) { 
		if (this.authenticationService.currentUserValue) { 
			this.router.navigate(['/']);
		}
	}

	ngOnInit() {
		this.registerForm = this.formBuilder.group({
			nome: ['', Validators.required, Validators.maxLength(100)],
			email: ['', Validators.required, Validators.maxLength(100), Validators.email],
			emailConfirmacao: ['', Validators.required, Validators.maxLength(100), Validators.email],
			username: ['', Validators.required, Validators.minLength(4)],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
	}

	get f() { return this.registerForm.controls; }

	onSubmit() {
		this.submitted = true;

		if (this.registerForm.invalid) {
			return;
		}

		if (this.validacao()) {
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

    validacao(): Boolean {
        if (!this.isName(this.registerForm.controls['nome'].value)) {
            this.alertService.error("Nome inválido");
        } else if (!this.isEmail(this.registerForm.controls['emailConfirmacao'].value)) {
			this.alertService.error('* Email de confirmação inválido');
		} else if (this.registerForm.controls['emailConfirmacao'].value != this.registerForm.controls['email'].value) {
			this.alertService.error('* Email de confirmação diferente do informado.');
		} else {
        	return true;
		}
    }

    isName(name: string): boolean {
		this.nome = name.match(/^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/);
		if (this.nome != null) {
			return true;
		} else {
			return false;
		}
    }
	isEmail(email: string): boolean {
		let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		return regexp.test(email);
	}
}
