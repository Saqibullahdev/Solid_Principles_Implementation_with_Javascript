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

//     constructor(type: string) {
//         this.type = type;
//     }

//     processPayment(amount: number): void {
//         if (this.type === "creditCard") {
//             console.log(`Processing credit card payment of ${amount}`);
//         } else if (this.type === "paypal") {
//             console.log(`Processing paypal payment of ${amount}`);
//         } else {
//             console.log(`Payment method not supported`);
//         }
//     }
// }

// const creditCardProcessor = new PaymentProcessor("creditCard");
// creditCardProcessor.processPayment(100); // Processing credit card payment of 100

// const paypalProcessor = new PaymentProcessor("paypal");
// paypalProcessor.processPayment(200);     // Processing paypal payment of 200


/***
 * Now solving the problem using Creating Interface for PaymentProcessor class
 */

interface PaymentProcessorInterface {
    processPayment(amount: number): void;
}

class ProcessPayment{
    private paymentProcessor: PaymentProcessorInterface;

    constructor(paymentProcessor: PaymentProcessorInterface){
        this.paymentProcessor = paymentProcessor;
    }

    processPayment(amount: number): void {
        this.paymentProcessor.processPayment(amount);
    }
}

class CreditCardProcessor implements PaymentProcessorInterface {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of ${amount}`);
    }
}

class PaypalProcessor implements PaymentProcessorInterface {
    processPayment(amount: number): void {
        console.log(`Processing paypal payment of ${amount}`);
    }
}

const creditCardProcessor= new CreditCardProcessor();
const paypalProcessor= new PaypalProcessor();
const paymentProcessor1= new ProcessPayment(creditCardProcessor);
const paymentProcessor2= new ProcessPayment(paypalProcessor);
paymentProcessor1.processPayment(100); // Processing credit card payment of 100
paymentProcessor2.processPayment(200); // Processing Paypal  payment of 200



//Another example

interface MakEngine{
    start(): void;
}

class Vehicle{
    private engine: MakEngine;

    constructor(engine: MakEngine){
        this.engine= engine;
    }

    startEngine(): void{
        this.engine.start();
    }
}


class CarEngine implements MakEngine{
    start(): void{
        console.log('Car engine started');
    }
}

class BikeEngine implements MakEngine{
    start(): void{
        console.log('Bike engine started');
    }
}

const carEngine= new CarEngine();
const bikeEngine= new BikeEngine();
const vehicle1= new Vehicle(carEngine);
const vehicle2= new Vehicle(bikeEngine);
vehicle1.startEngine(); // Car engine started
vehicle2.startEngine(); // Bike engine started