import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/_services/produtos.service';
import { CarrinhoService } from 'src/app/_services/carrinho.service';

@Component({
	selector: 'app-produto-detalhe',
	templateUrl: './produto-detalhe.component.html',
	styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {
	product;

	constructor( private route: ActivatedRoute, private produtosService : ProdutosService, private carrinhoService: CarrinhoService) { }

	ngOnInit() {
		const routeParams = this.route.snapshot.paramMap;
		const productIdFromRoute = Number(routeParams.get('productId'));
		
		this.getProduto(productIdFromRoute);
	}

	getProduto(id) {
		this.produtosService.getProduto(id).subscribe(dados => this.product = dados);
	}
	
	addToCart(product) {
		this.carrinhoService.addToCart(product);
		window.alert('Your product has been added to the cart!');
	}
}
