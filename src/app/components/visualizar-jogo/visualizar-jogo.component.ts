import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-visualizar-jogo',
  templateUrl: './visualizar-jogo.component.html',
  styleUrls: ['./visualizar-jogo.component.css']
})
export class VisualizarJogoComponent implements OnInit {
  jogo?: Game;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService
  ) {}

  async ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;

    this.jogo = await this.gameService.getGameById(id);

    if (!this.jogo) {
      alert('Jogo não encontrado');
      this.router.navigate(['/listar-jogos']);
    }
  }
}
