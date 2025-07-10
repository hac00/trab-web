import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class GameService extends Dexie{

  games: Dexie.Table<Game, number>;

  constructor() {
    super('GameDB');
    this.version(1).stores({
      games: '++id, name, status, platform, releaseDate, imageUrl, comments, hoursPlayed'
    });
    this.games = this.table('games');
  }

  async addGame(game: Game): Promise<number> {
    return await this.games.add(game);
  }

  async getGames(): Promise<Game[]> {
    return await this.games.toArray();
  }

  async getGameById(id: number): Promise<Game | undefined> {
    return await this.games.get(id);
  }

  async updateGame(id: number, game: Game): Promise<number> {
    return await this.games.update(id, game);
  }

  async deleteGame(id: number): Promise<void> {
    return await this.games.delete(id);
  }
}