import { Routes } from '@angular/router';
import { CardapioComponent } from './app/components/cardapio/cardapio.component';
import { InicioComponent } from './app/components/inicio/inicio.component';
import { ApresentacaoComponent } from './app/components/apresentacao/apresentacao.component';
import { AdminComponent } from './app/components/admin/admin.component';
import { ListaProdutosComponent } from './app/components/admin/lista-produtos/lista-produtos.component';
import { FormProdutoComponent } from './app/components/admin/form-produto/form-produto.component';


export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'apresentacao', component: ApresentacaoComponent },
  { path: 'pedido', component: CardapioComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'produtos', pathMatch: 'full' },
      { path: 'produtos', component: ListaProdutosComponent },
      { path: 'novo', component: FormProdutoComponent },
      { path: 'editar/:id', component: FormProdutoComponent }
    ]
  }
];