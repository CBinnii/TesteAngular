import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
	selector: 'app-produtos',
	templateUrl: './produtos.component.html',
	styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

	produtos: any[];

	constructor( private produtosService : ProdutosService) { }

	ngOnInit(): void {
		this.listar();
	}

	listar() {
		this.produtosService.listar().subscribe(dados => this.produtos = dados);
	}
}
