import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginateService } from 'src/app/_services/paginate.service';
import { ProdutosService } from 'src/app/_services/produtos.service';

@Component({
	selector: 'app-produtos',
	templateUrl: './produtos.component.html',
	styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
	produtos: any[];
    private allItems: any[];
    pager: any = {};
    pagedItems: any[];

	constructor( private produtosService : ProdutosService, private http: HttpClient, private route: ActivatedRoute, private pagerService: PaginateService) { }

	ngOnInit(): void {
        this.produtosService.listar() .subscribe(data => {
			this.allItems = data;
			this.setPage(1);
		});
		
		this.listar();
	}

	listar() {
		this.produtosService.listar().subscribe(dados => this.produtos = dados);
	}

    setPage(page: number) {
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
