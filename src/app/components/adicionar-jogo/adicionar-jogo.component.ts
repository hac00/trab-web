import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-jogo',
  templateUrl: './adicionar-jogo.component.html',
  styleUrls: ['./adicionar-jogo.component.css']
})
export class AdicionarJogoComponent implements OnInit {
  jogoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jogoForm = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      comments: [''],
      releaseDate: ['', Validators.required],
      platform: ['', Validators.required],
      genre: ['', Validators.required],
      imageUrl: [''],
      hoursPlayed: ['']
    });
  }

  async onSubmit() {
    if (this.jogoForm.invalid) return;

    try {
      await this.gameService.addGame(this.jogoForm.value);
      alert('Jogo adicionado com sucesso!');
      this.jogoForm.reset({
        name: '',
        status: '',
        comments: '',
        releaseDate: '',
        platform: '',
        genre: '',
        imageUrl: '',
        hoursPlayed: ''
      });
      this.router.navigate(['/listar-jogos']);
    } catch (error) {
      console.error('Erro ao adicionar jogo:', error);
      alert('Ocorreu um erro ao adicionar o jogo. Por favor, tente novamente.');
    }
  }
}
