import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ProdutosService {

	UrlProdutos = 'https://6089cd648c8043001757f650.mockapi.io/Product';

	constructor(private http: HttpClient) { }

	listar() {
		return this.http.get<any[]>(`${this.UrlProdutos}`);
	}

	getProduto(id) {
		return this.http.get<any[]>(`${this.UrlProdutos}/${id}`);
	}
}
