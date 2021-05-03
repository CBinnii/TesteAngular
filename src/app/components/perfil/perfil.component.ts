import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { AddressService } from 'src/app/_services/address.service';
import { AlertService } from 'src/app/_services/alert.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
	currentUser: User;
	registerForm: FormGroup;
	enderecos : any[];
    loading = false;
    submitted = false;

	constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private addressService: AddressService,
        private alertService: AlertService
    ) { 
		this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
		this.listar();
    }

	listar() {
		this.addressService.getAllByUser(this.currentUser[0].id).subscribe(dados => this.enderecos = dados);
	}

	ngOnInit() {
        this.registerForm = this.formBuilder.group({
			CEP: ['', Validators.required],
			Endereco: ['', Validators.required],
			Numero: ['', Validators.required],
			Cidade: ['', Validators.required],
        });
    }

	get f() { return this.registerForm.controls; }

	onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.addressService.register(this.currentUser[0].id, this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Endereço cadastrado com sucesso!', true);
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
