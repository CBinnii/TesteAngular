import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AlertaComponent } from './components/alerta/alerta.component';

import { ProdutosService } from './_services/produtos.service';
import { EnderecoService } from './_services/endereco.service';
import { PedidosService } from './_services/pedidos.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ProdutosComponent,
		ProdutoDetalheComponent,
		SobreComponent,
		HeaderComponent,
		FooterComponent,
		LoginComponent,
		RegisterComponent,
		CarrinhoComponent,
		DashboardComponent,
		PerfilComponent,
		AlertaComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		NgxPaginationModule,
		ReactiveFormsModule,
		HttpClientModule,
		appRoutingModule
	],
	providers: [
		ProdutosService,
		EnderecoService,
		PedidosService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
