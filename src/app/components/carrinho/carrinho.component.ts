import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarrinhoService } from 'src/app/_services/carrinho.service';

@Component({
	selector: 'app-carrinho',
	templateUrl: './carrinho.component.html',
	styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
	items = this.carrinhoService.getItems();
	checkoutForm = this.formBuilder.group({
		name: '',
		address: ''
	});

	constructor(private carrinhoService: CarrinhoService, private formBuilder: FormBuilder,) { }

	ngOnInit(): void {
	}
	onSubmit(): void {
		this.items = this.carrinhoService.clearCart();
		console.warn('Your order has been submitted', this.checkoutForm.value);
		this.checkoutForm.reset();
	}
}
