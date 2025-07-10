import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-atualizar-jogo',
  templateUrl: './atualizar-jogo.component.html',
  styleUrls: ['./atualizar-jogo.component.css']
})
export class AtualizarJogoComponent implements OnInit {
  jogoForm!: FormGroup;
  jogoId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService
  ) {}

  async ngOnInit() {
    this.jogoId = +this.route.snapshot.paramMap.get('id')!;

    const jogo = await this.gameService.getGameById(this.jogoId);

    if (!jogo) {
      alert('Jogo não encontrado');
      this.router.navigate(['/listar-jogos']);
      return;
    }

    this.jogoForm = this.fb.group({
      name: [jogo.name, Validators.required],
      status: [jogo.status, Validators.required],
      comments: [jogo.comments],
      releaseDate: [this.formatDate(jogo.releaseDate), Validators.required],
      platform: [jogo.platform, Validators.required],
      genre: [jogo.genre, Validators.required],
      imageUrl: [jogo.imageUrl],
      hoursPlayed: [jogo.hoursPlayed ?? '']
    });
  }

  private formatDate(date: Date | string): string {
    const d = new Date(date);
    return d.toISOString().substring(0, 10);
  }

  async onSubmit() {
    if (this.jogoForm.invalid) return;

    try {
      await this.gameService.updateGame(this.jogoId, this.jogoForm.value);
      alert('Jogo atualizado com sucesso!');
      this.router.navigate(['/listar-jogos']);
    } catch (error) {
      console.error('Erro ao atualizar jogo:', error);
      alert('Erro ao atualizar o jogo. Tente novamente.');
    }
  }
}
