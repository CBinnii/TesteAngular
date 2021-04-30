import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProdutosService } from './services/produtos.service';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    ProdutoDetalheComponent,
    SobreComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'produtos', component: ProdutosComponent },
      { path: 'produto/:productId', component: ProdutoDetalheComponent },
      { path: 'sobre', component: SobreComponent }
    ])
  ],
  providers: [
    ProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
