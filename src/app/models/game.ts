export class Game {
  id?: number;
  name: string;
  status: string;
  comments: string;
  imageUrl?: string;
  releaseDate: Date;
  platform: string;
  genre: string;
  hoursPlayed?: number;

  constructor(name: string, status: string, comments: string, releaseDate: Date, platform: string, genre: string, id?: number, imageUrl?: string, hoursPlayed?: number) {    
    this.name = name;
    this.status = status;
    this.comments = comments;
    this.releaseDate = releaseDate;
    this.platform = platform;
    this.genre = genre;
    this.id = id;
    this.imageUrl = imageUrl;
    this.hoursPlayed = hoursPlayed;
  }
}