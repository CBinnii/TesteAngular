import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { EnderecoService } from 'src/app/_services/endereco.service';
import { PedidosService } from 'src/app/_services/pedidos.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	currentUser: User;
	enderecos: any[];
	pedidos: any[];

	constructor( private EnderecoService : EnderecoService, private PedidosService : PedidosService, private authenticationService: AuthenticationService ) { }

	ngOnInit(): void {
		this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
		this.listarEndereco();
		this.listarPedidos();
	}

	listarEndereco() {
		this.EnderecoService.listar(this.currentUser[0].id).subscribe(dados => this.enderecos = dados);
	}

	listarPedidos() {
		this.PedidosService.listarUltimos5(this.currentUser[0].id, 3).subscribe(dados => this.pedidos = dados);
	}
}
