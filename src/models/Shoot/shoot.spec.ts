import { expect } from 'chai';

import Shoot from './shoot.model';
import ScoreType from '../ScoreType/score-type.enum';

describe('Delivery Test Case', () => {

  it('creating a Strike delivery point', () => {
    const delivery = new Shoot('X', ScoreType.Strike);
    expect(delivery.getType()).to.be.eql(ScoreType.Strike);
  });

  it('creating a valued delivery point', () => {
    const delivery = new Shoot('8', ScoreType.Value);
    expect(delivery.getType()).to.be.eql(ScoreType.Value);
    expect(delivery.getScore()).to.be.eql('8');
  });

});
