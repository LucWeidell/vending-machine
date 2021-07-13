import { ProxyState } from "../AppState.js";

class VendingsService{

  constructor(){}

  //Gets the array of snacks from the proxyState
  getSnacks() {
    return ProxyState.snacks;
  }

  drawStock(snack){
    let snackToBuy = this.getSnacks().find(element => element.getName() == snack)
    let template = ''
    template += snackToBuy.getStock()
    return template
  }

  drawSnacks() {
    let snacks = this.getSnacks()
    let template = ''
    snacks.forEach(snack => {
      let snackDescr = snack.toString()
      let snackName = snack.getName().trim()
      let snackID = snackName.replaceAll(' ', '');
      template += `<button id=${snackID} class="m-2 btn btn-primary" onclick="app.vendingsController.purchase('${snackName}')">
      Buy ${snackName} <br> <p>${snackDescr}<span id ="${snackID}-stock">${snack.getStock()}</span> remain.</p></button>`
    })
    return template
  }

  //Return the current total
  currentMoneyIn(){
    return ProxyState.moneyStored
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

  purchase(snack) {
     let snackToBuy = this.getSnacks().find(element => element.getName() == snack)
     if(ProxyState.moneyStored >= snackToBuy.getCost()){
       if(snackToBuy.canReduceStock()){
         ProxyState.moneyStored -= snackToBuy.getCost()
         return true
       }
     }
     return false
  }
}

export const vendingsService = new VendingsService();