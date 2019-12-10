import Frame from '../Frame/frame.model';

class Game {
  private frames: Array<Frame>

  constructor() {
    this.frames = new Array<Frame>();
  }

  public setPin(frame: Frame): void {
    if (this.frames.length === 10) {
      throw 'The game is end!';
    }

    this.frames.push(frame);
  }

  public calculateScore(): number {
    return this.frames.reduce((result, frame) => 0 , 0);
  }

  public createRandomGame() {

  }

  public toString(): string {
    return this.frames.reduce((result, frame) => result.concat(`${frame.toString()} `), '');
  }

}

export default Game;
