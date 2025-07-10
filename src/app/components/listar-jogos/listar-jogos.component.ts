import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-jogos',
  templateUrl: './listar-jogos.component.html',
  styleUrls: ['./listar-jogos.component.css']
})
export class ListarJogosComponent implements OnInit {

  jogos: Game[] = [];  // <- precisa ter isso aqui!

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit(): void {
    this.carregarJogos();
  }

  async carregarJogos() {
    this.jogos = await this.gameService.getGames();
  }

  visualizarJogo(id: number) {
    this.router.navigate(['/visualizar-jogo', id]);
  }

  atualizarJogo(id: number) {
    this.router.navigate(['/atualizar-jogo', id]);
  }

  async excluirJogo(id: number) {
    if (confirm('Tem certeza que deseja excluir este jogo?')) {
      await this.gameService.deleteGame(id);
      this.carregarJogos();
    }
  }
}
