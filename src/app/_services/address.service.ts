import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../_models/address';

@Injectable({
	providedIn: 'root'
})
export class AddressService {

	constructor(private http: HttpClient) { }

	getAllByUser(id) {
		return this.http.get<Address[]>(`https://6089cd648c8043001757f650.mockapi.io/User/${id}/Endereco`);
	}

	register(id, user: Address) {
		return this.http.post(`https://6089cd648c8043001757f650.mockapi.io/User/${id}/Endereco`, user);
	}

	delete(id, AddressId) {
		return this.http.delete(`https://6089cd648c8043001757f650.mockapi.io/User/${id}/Endereco/${AddressId}`);
	}
}
