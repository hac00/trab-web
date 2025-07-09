export class Game {
  id?: number;
  name: string;
  description: string;
  imageUrl?: string;
  releaseDate: Date;
  genre: string;
  platform: string;

  constructor(name: string, description: string, releaseDate: Date, genre: string, platform: string, id?: number, imageUrl?: string) {    
    this.name = name;
    this.description = description;
    this.releaseDate = releaseDate;
    this.genre = genre;
    this.platform = platform;
    this.id = id;
    this.imageUrl = imageUrl;
  }
}