import { ProxyState } from "../AppState.js";

class VendingsService{

  constructor(){}

  //Gets the array of snacks from the proxyState
  getSnacks() {
    return ProxyState.snacks;
  }

  drawSnacks() {
    let snacks = this.getSnacks()
    let template = ''
    snacks.forEach(snack => {
      let snackDescr = snack.toString()
      let snackName = snack.getName()
      let snackID = snackName.replace(/\s+/g, '');
      template += `<button id= class="btn btn-primary" onclick="app.vendingsController.purchase(${snack.getName()}">
      Buy ${snackName} <br> <h5>${snackDescr}<span id ="${snackID}">${snack.getStock()}</span> remain.</h5></button>`
    })
    return template
  }


  pay(change){
    //console.log('total',change)
    ProxyState.moneyStored += change;
  }

  returnChange(){
    let change = ProxyState.moneyStored.toFixed(2)
    ProxyState.moneyStored = 0
    return change;
  }

  pickSnack() {
  }

  purchaseSnack() {}
}

export const vendingsService = new VendingsService();