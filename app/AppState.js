import Snacks from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  moneyStored = 0
  snacks = [redBull, snicker, gatorade, peanuts]
}

//Snacks for the AppState
let redBull = new Snacks('Red Bull', true, 2.50, 10);
let snicker = new Snacks('Snickers', false, 1.25, 5);
let gatorade = new Snacks('Gatorade', true, 2.23, 8);
let peanuts = new Snacks('Peanuts', false, .80, 5);


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
