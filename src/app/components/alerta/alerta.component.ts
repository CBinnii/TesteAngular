import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
	selector: 'app-alerta',
	templateUrl: './alerta.component.html',
	styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {
	private subscription: Subscription;
	message: any;

	constructor(private alertService: AlertService) { }

	ngOnInit() {
		this.subscription = this.alertService.getAlert()
			.subscribe(message => {
				switch (message && message.type) {
					case 'success':
						message.cssClass = 'alert alert-success';
						break;
					case 'error':
						message.cssClass = 'alert alert-danger';
						break;
				}

				this.message = message;
			});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
