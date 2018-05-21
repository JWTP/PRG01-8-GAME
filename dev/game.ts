class Game{
  public score: number = 0;
  public clicks_per_second: number = 0;

  constructor(){
    requestAnimationFrame(() => this.gameloop());
  }

  gameloop(){
    requestAnimationFrame(() => this.gameloop());
  }
}