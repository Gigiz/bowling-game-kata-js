import ScoreType from '../ScoreType/score-type.enum';

class Shoot {

  private score: string
  private type: ScoreType

  constructor(score: string, type: ScoreType) {
    this.score = score;
    this.type = type;
  }

  public getScore(): string {
    return this.score;
  }

  public getType(): ScoreType {
    return this.type;
  }

}

export default Shoot;
