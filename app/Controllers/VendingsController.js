import { ProxyState } from "../AppState.js";
import {vendingsService} from "../Services/VendingsService.js";


//draw function name on the button and nameStock for the span on the stock
function _draw(){
  document.getElementById('snacks').innerHTML = vendingsService.drawSnacks();
}


export default class VendingsController{

  constructor(){
    _draw()
  }

  pay(change){
    //console.log('total',change)
    vendingsService.pay(change)
  }

  returnChange(){
    console.log('You received back: $', vendingsService.returnChange())
  }

  pickSnack() {
  }

  purchaseSnack() {}
}