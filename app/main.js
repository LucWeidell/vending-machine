import VendingsController from "./Controllers/VendingsController.js";

class App {
  vendingsController = new VendingsController();
}

window["app"] = new App();
