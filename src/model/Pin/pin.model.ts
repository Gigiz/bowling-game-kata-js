import Delivery from "../Delivery/delivery.model";
import ScoreType from "../ScoreType/score-type.enum";

const MAX_TRY = 2;

class Pins {

  private deliveries: Array<Delivery>

  constructor() {
    this.deliveries = new Array<Delivery>();
  }

  public setDelivery(delivery: Delivery) {
    if (this.deliveries.length === MAX_TRY) {
      throw 'You have reached maximum number of tentatives';
    }

    if (this.deliveries.some(delivery => delivery.getType() === ScoreType.Strike)) {
      throw 'You have just got a Strike!';
    }

    this.deliveries.push(delivery);
  }

  public getDeliveries(): Array<Delivery> {
    return this.deliveries;
  }

  public toString() {
    return this.deliveries.reduce((result, delivery) => {
      return result.concat(delivery.getScore());
    }, '');
  }

}

export default Pins;
