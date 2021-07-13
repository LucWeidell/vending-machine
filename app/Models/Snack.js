export default class Snacks{
  /**
   * Constructor for snacks
   *
   * @param {String} name Name of the snack
   * @param {Boolean} isDrink Is the snack a drink
   * @param {number} cost Const of the drink: ex:(2.00)
   * @param {number} stock How many in vending machine
   */
  constructor(name, isDrink, cost, stock){
    this.name = name;;
    this.isDrink = isDrink;
    this.cost = cost.toFixed(2);
    this.stock =stock || 0;
  }

  toString() {
    return `${this.name} costs $${this.cost},`
  }

  getStock(){
    return this.stock
  }

  getName() {
    return this.name
  }

  getCost(){
    return this.cost;
  }

  canReduceStock(){
    if(this.stock > 0){
      this.stock--
      return true
    }
    return false
  }

}
