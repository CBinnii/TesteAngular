import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { PerfilComponent } from './components/perfil/perfil.component';

import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'produtos', component: ProdutosComponent },
    { path: 'produto/:productId', component: ProdutoDetalheComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'carrinho', component: CarrinhoComponent },
    { path: 'novo-endereco', component: PerfilComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);