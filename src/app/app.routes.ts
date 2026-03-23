import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Produtos } from './produtos/produtos';
import { Detalhamento } from './detalhamento/detalhamento';

export const routes: Routes = [

  { path: '', component: Home },
  { path: 'produtos', component: Produtos },
  { path: 'produtos/:id', component: Detalhamento }


];

