import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
	private modals: any[] = [];

	constructor() { }

	add(modal: any) {
        this.modals.push(modal);
    }

	open(id: string) {
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }

	close(id: string) {
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}
