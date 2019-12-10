import Delivery from "../Shoot/shoot.model";
import ScoreType from "../ScoreType/score-type.enum";

const MAX_TRY = 2;

class Frame {

  private deliveries: Array<Delivery>

  constructor() {
    this.deliveries = new Array<Delivery>();
  }

  public setDelivery(delivery: Delivery): void {
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

  public toString(): string {
    return this.deliveries.reduce((result, delivery) => result.concat(delivery.getScore()), '');
  }

}

export default Frame;
