import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent} from './components/homepage/homepage.component';
// import { ListarJogosComponent } from './components/listar-jogos/listar-jogos.component';
import { AdicionarJogoComponent } from './components/adicionar-jogo/adicionar-jogo.component';
import { AtualizarJogoComponent } from './components/atualizar-jogo/atualizar-jogo.component';
import { VisualizarJogoComponent } from './components/visualizar-jogo/visualizar-jogo.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  // { path: 'listar-jogos', component: ListarJogosComponent },
  { path: 'adicionar-jogo', component: AdicionarJogoComponent },
  { path: 'atualizar-jogo/:id', component: AtualizarJogoComponent },
  { path: 'visualizar-jogo/:id', component: VisualizarJogoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
