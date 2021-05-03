import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { PaginateService } from 'src/app/_services/paginate.service';
import { PedidosService } from 'src/app/_services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
	currentUser: User;
	pedidos: any[];
  private allItems: any[];
  pager: any = {};
  pagedItems: any[];

  constructor(private PedidosService : PedidosService, private authenticationService: AuthenticationService, private pagerService: PaginateService) { }

  ngOnInit(): void {
		this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

		this.listarPedidos();
  }

	listarPedidos() {
		this.PedidosService.listar(this.currentUser[0].id).subscribe(data => {
      this.allItems = data;
      this.setPage(1);
    });
	}

  setPage(page: number) {
      this.pager = this.pagerService.getPager(this.allItems.length, page);

      this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
