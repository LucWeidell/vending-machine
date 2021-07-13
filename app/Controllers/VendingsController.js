import {vendingsService} from "../Services/VendingsService.js";


//draw function name on the button and nameStock for the span on the stock
function _drawSnacks(){
  document.getElementById('snacks').innerHTML = vendingsService.drawSnacks();
}

function _drawWallet(){
  document.getElementById('wallet').innerText = vendingsService.currentMoneyIn();
}


export default class VendingsController{

  constructor(){
    _drawSnacks()
  }

  pay(change){
    //console.log('total',change)
    vendingsService.pay(change)
    _drawWallet()
  }

  returnChange(){
    console.log('You received back: $', vendingsService.returnChange())
  }

  purchase(snack) {
    if(vendingsService.purchase(snack)){
      let snackID = snack.replaceAll(' ', '');
      document.getElementById(snackID + '-stock').innerText = vendingsService.drawStock(snack)
    } else{
      alert("You cannot purchase that snack.")
    }
  }
}