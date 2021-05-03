import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

	UrlEndereco = 'https://6089cd648c8043001757f650.mockapi.io/User/';

	constructor(private http: HttpClient) { }

	listar(idUser) {
		return this.http.get<any[]>(`${this.UrlEndereco}/${idUser}/Endereco`);
	}

	getProduto(idUser, id) {
		return this.http.get<any[]>(`${this.UrlEndereco}/${idUser}/Endereco/${id}`);
	}
}
