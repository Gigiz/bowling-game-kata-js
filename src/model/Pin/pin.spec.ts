import { expect, assert } from 'chai';

import Pin from './pin.model';
import Delivery from '../Delivery/delivery.model';
import ScoreType from '../ScoreType/score-type.enum';

const strikeDelivery = new Delivery('X', ScoreType.Strike);
const valuedDelivery = new Delivery('7', ScoreType.Value);
const spareDelivery = new Delivery('/', ScoreType.Spare);
const missDelivery = new Delivery('-', ScoreType.Miss);

describe('Pin Test Case', () => {

  it('creating a Strike pin', () => {
    const pin = new Pin();
    pin.setDelivery(strikeDelivery);
    expect(pin.toString()).to.be.eql('X');
  });

  it('creating a Spare pin', () => {
    const pin = new Pin();
    pin.setDelivery(valuedDelivery);
    pin.setDelivery(spareDelivery);
    expect(pin.toString()).to.be.eql('7/');
  });

  it('creating a Miss pin', () => {
    const pin = new Pin();
    pin.setDelivery(valuedDelivery);
    pin.setDelivery(missDelivery);
    expect(pin.toString()).to.be.eql('7-');
  });

  it('cannot do a double Strike pin', () => {
    const pin = new Pin();
    pin.setDelivery(strikeDelivery);
    assert.throws(() => pin.setDelivery(strikeDelivery), /You have just got a Strike!/)
  });

  it('cannot do a three deliveries', () => {
    const pin = new Pin();
    pin.setDelivery(valuedDelivery);
    pin.setDelivery(valuedDelivery);
    assert.throws(() => pin.setDelivery(valuedDelivery), /You have reached maximum number of tentatives/)
  });

});
