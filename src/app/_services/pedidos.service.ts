import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PedidosService {
	UrlPedido = 'https://6089cd648c8043001757f650.mockapi.io/User/';

	constructor(private http: HttpClient) { }

	listar(idUser) {
		return this.http.get<any[]>(`${this.UrlPedido}/${idUser}/Order`);
	}

	listarUltimos5(idUser, limit) {
		return this.http.get<any[]>(`${this.UrlPedido}/${idUser}/Order?page=1&limit=${limit}&orderby=createdAt&order=desc`)
	}

	getProduto(idUser, id) {
		return this.http.get<any[]>(`${this.UrlPedido}/${idUser}/Order/${id}`);
	}
}
