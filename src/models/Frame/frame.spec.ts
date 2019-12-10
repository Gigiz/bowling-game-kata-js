import { expect, assert } from 'chai';

import Frame from './frame.model';
import Delivery from '../Shoot/shoot.model';
import ScoreType from '../ScoreType/score-type.enum';

const strikeDelivery = new Delivery('X', ScoreType.Strike);
const valuedDelivery = new Delivery('7', ScoreType.Value);
const spareDelivery = new Delivery('/', ScoreType.Spare);
const missDelivery = new Delivery('-', ScoreType.Miss);

describe('Frame Test Case', () => {

  it('creating a Strike frame', () => {
    const pin = new Frame();
    pin.setDelivery(strikeDelivery);
    expect(pin.toString()).to.be.eql('X');
  });

  it('creating a Spare frame', () => {
    const pin = new Frame();
    pin.setDelivery(valuedDelivery);
    pin.setDelivery(spareDelivery);
    expect(pin.toString()).to.be.eql('7/');
  });

  it('creating a Miss frame', () => {
    const pin = new Frame();
    pin.setDelivery(valuedDelivery);
    pin.setDelivery(missDelivery);
    expect(pin.toString()).to.be.eql('7-');
  });

  it('cannot do a double Strike frame', () => {
    const pin = new Frame();
    pin.setDelivery(strikeDelivery);
    assert.throws(() => pin.setDelivery(strikeDelivery), /You have just got a Strike!/)
  });

  it('cannot do a three deliveries', () => {
    const pin = new Frame();
    pin.setDelivery(valuedDelivery);
    pin.setDelivery(valuedDelivery);
    assert.throws(() => pin.setDelivery(valuedDelivery), /You have reached maximum number of tentatives/)
  });

});
