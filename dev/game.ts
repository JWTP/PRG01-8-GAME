class Game{

  constructor(){
    requestAnimationFrame(() => this.gameloop());
  }

  gameloop(){
    requestAnimationFrame(() => this.gameloop());
  }
}