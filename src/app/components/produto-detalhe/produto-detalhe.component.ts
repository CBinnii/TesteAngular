import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/_services/produtos.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {

  product;

  constructor( private route: ActivatedRoute, private produtosService : ProdutosService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    
    this.getProduto(productIdFromRoute);
  }

	getProduto(id) {
		this.produtosService.getProduto(id).subscribe(dados => this.product = dados);
	}
	
}
