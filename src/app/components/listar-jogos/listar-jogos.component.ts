import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-jogos',
  templateUrl: './listar-jogos.component.html',
  styleUrls: ['./listar-jogos.component.css']
})
export class ListarJogosComponent implements OnInit {

  jogos: Game[] = [];

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
  const confirmar = confirm('Tem certeza que deseja excluir este jogo?');
  if (confirmar) {
    try {
      await this.gameService.deleteGame(id);
      Swal.fire("Sucesso!", "Jogo excluído com sucesso!", "success");
      this.jogos = await this.gameService.getGames();
    } catch (error) {
      console.error('Erro ao excluir jogo:', error);
      Swal.fire("Erro!", "Não foi possível excluir o jogo. Tente novamente.", "error");
    }
  }
  }

}
