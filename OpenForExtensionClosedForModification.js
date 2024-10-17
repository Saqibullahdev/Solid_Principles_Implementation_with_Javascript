"use strict";
/***
 * Open for extension, closed for modification principle
 * this Code is not following the Open for extension, closed for modification principle
 * because if we want to add a new payment method, we have to modify the PaymentProcessor class
 * which is not a good practice.
 *
 * To solve this problem, we can use the Strategy pattern.
 *
 */
// class PaymentProcessor {
//     private type: string;
class ProcessPayment {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }
    processPayment(amount) {
        this.paymentProcessor.processPayment(amount);
    }
}
class CreditCardProcessor {
    processPayment(amount) {
        console.log(`Processing credit card payment of ${amount}`);
    }
}
class PaypalProcessor {
    processPayment(amount) {
        console.log(`Processing paypal payment of ${amount}`);
    }
}
const creditCardProcessor = new CreditCardProcessor();
const paypalProcessor = new PaypalProcessor();
const paymentProcessor1 = new ProcessPayment(creditCardProcessor);
const paymentProcessor2 = new ProcessPayment(paypalProcessor);
paymentProcessor1.processPayment(100); // Processing credit card payment of 100
paymentProcessor2.processPayment(200); // Processing Paypal  payment of 200
class Vehicle {
    constructor(engine) {
        this.engine = engine;
    }
    startEngine() {
        this.engine.start();
    }
}
class CarEngine {
    start() {
        console.log('Car engine started');
    }
}
class BikeEngine {
    start() {
        console.log('Bike engine started');
    }
}
const carEngine = new CarEngine();
const bikeEngine = new BikeEngine();
const vehicle1 = new Vehicle(carEngine);
const vehicle2 = new Vehicle(bikeEngine);
vehicle1.startEngine(); // Car engine started
vehicle2.startEngine(); // Bike engine started
