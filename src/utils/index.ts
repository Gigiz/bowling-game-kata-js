import Game from '../models/Game/game.model';
import ScoreType from '../models/ScoreType/score-type.enum';

function randomEnum<T>(anEnum: T): T[keyof T] {
  const enumValues = Object.keys(anEnum)
    .map(n => Number.parseInt(n))
    .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
  const randomIndex = Math.floor(Math.random() * enumValues.length)
  const randomEnumValue = enumValues[randomIndex]
  return randomEnumValue;
}

function createRandomGame(): Game {
  const game: Game = new Game();

  const result = Array.from({ length: 10 });

  console.log(result);
  //Object.keys().map(v=> console.log(v));

  const scoreType = randomEnum(ScoreType);
  return game;
}

export {
  createRandomGame,
}
