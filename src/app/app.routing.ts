import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { RegisterComponent } from './components/register/register.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'produtos', component: ProdutosComponent },
    { path: 'produto/:productId', component: ProdutoDetalheComponent },
    { path: 'sobre', component: SobreComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);