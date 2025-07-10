export class Game {
  id?: number;
  name: string;
  status: string;
  comments: string;
  imageUrl?: string;
  releaseDate: Date;
  genre: string;
  platform: string;
  hoursPlayed?: number;

  constructor(name: string, status: string, comments: string, releaseDate: Date, genre: string, platform: string, id?: number, imageUrl?: string, hoursPlayed?: number) {    
    this.name = name;
    this.status = status;
    this.comments = comments;
    this.releaseDate = releaseDate;
    this.genre = genre;
    this.platform = platform;
    this.id = id;
    this.imageUrl = imageUrl;
    this.hoursPlayed = hoursPlayed;
  }
}