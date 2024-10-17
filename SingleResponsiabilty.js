/*

    ## Single Responsibility Principle (SRP)
    There should never be more than one reason for a class to change.
    as processing payment, is work of another department, tommorow if we want to change the payment method,
    we have to change the product class, which is not good.
    Like there is multiple reason for a class to change, 
    then it should be split into multiple classes.

    like here in the below example, the class Product is responsible for managing products, generating invoices, processing payments, and calculating pricing. This violates the Single Responsibility Principle (SRP) because it handles multiple unrelated responsibilities.
  This class violates the Single Responsibility Principle (SRP) because it handles multiple unrelated responsibilities:
  
  1. **Product Management**: The class is responsible for managing products (adding, removing, and retrieving).
  2. **Invoice Generation**: The class is also responsible for generating invoices, which is a separate responsibility.
  3. **Payment Processing**: The class processes payments and handles post-payment actions like adding to accounting and sending emails, which are separate concerns.
  4. **Pricing Calculation**: The class calculates the total pricing, which again should be a responsibility on its own.

  These responsibilities should be split into separate classes to adhere to SRP:
  - A `ProductManager` class for adding, removing, and managing products.
  - An `InvoiceGenerator` class for handling invoice generation.
  - A `PaymentProcessor` class for handling payment processing and related tasks.
  - A `PricingCalculator` class for calculating the total cost of products.

  This separation improves code organization, makes it easier to maintain, and allows for independent modification of each responsibility without affecting others.
*/
// class Product {
//   constructor(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }
//   products = [];

//   addProduct(product) {
//     this.products.push(product);
//     console.log("Product added successfully!");
//   }

//   getProducts() {
//     return this.products;
//   }

//   removeProduct(productId) {
//     this.products = this.products.filter((product) => product.id !== productId);
//     console.log("Product removed successfully!");
//   }

//   generateInvoice(products, amount) {
//     console.log(`
//     Invoice Date: ${new Date().toDateString()}
//     -------------------------------
//     Product Name\tPrice
//     `);

//     products.forEach((product) => {
//       console.log(`${product.name}\t\t${product.price}`);
//     });

//     console.log("-------------------------------");
//     console.log(`Total: ${amount}`);
//   }

//   ProcessPayment(order) {
//     console.log("Processing payment...");
//     console.log("Payment processed successfully!");
//     console.log("Added to accounting system!");
//     console.log("Email sent to customer!");
//   }

//   calculatePricing(products) {
//     return products.reduce((total, product) => total + product.price, 0);
//   }
// }

// const product1 = new Product(1, "Laptop", 1000);
// const product2 = new Product(2, "Mobile", 500);

// product1.addProduct(product1);
// product1.addProduct(product2);

// const products = product1.getProducts();
// const amount = product1.calculatePricing(products);
// product1.generateInvoice(products, amount);
// product1.ProcessPayment({ products, amount });





/*
  This code follows the Single Responsibility Principle (SRP) well by separating distinct concerns into different classes:
  
  1. **Product Class**: The `Product` class is responsible solely for representing a product with its `id`, `name`, and `price`.
  
  2. **ProductManager Class**: The `ProductManager` class is responsible for managing the products (adding, removing, and retrieving). It stores an array of `products` and handles any operations related to managing these products.
  
  3. **InvoiceGenerator Class**: The `InvoiceGenerator` class is responsible only for generating and printing the invoice. It doesn't handle any product-related operations or payments.
  
  4. **PricingCalculator Class**: The `PricingCalculator` class has a single responsibility of calculating the total price of all the products provided in the list.
  
  5. **PaymentProcessor Class**: The `PaymentProcessor` class is responsible for processing payments. It simulates payment processing, sending confirmation, and updating an accounting system.

  This structure adheres to SRP, as each class focuses on one area of responsibility, making the code easier to maintain, modify, and extend without violating SRP.
*/

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ProductManager {
    products = [];

    addProduct(product) {
        this.products.push(product);
        console.log("Product added successfully!");
    }

    getProducts() {
        return this.products;
    }

    removeProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId);
        console.log("Product removed successfully!");
    }
}

class InvoiceGenerator {
    generateInvoice(products, amount) {
        console.log(`
        Invoice Date: ${new Date().toDateString()}
        -------------------------------
        Product Name\tPrice
        `);

        products.forEach(product => {
            console.log(`${product.name}\t\t${product.price}`);
        });

        console.log("-------------------------------");
        console.log(`Total: ${amount}`);
    }
}

class PricingCalculator {
    calculatePricing(products) {
        return products.reduce((total, product) => total + product.price, 0);
    }
}

class PaymentProcessor {
    processPayment(order) {
        console.log("Processing payment...");
        console.log("Payment processed successfully!");
        console.log("Added to accounting system!");
        console.log("Email sent to customer!");
    }
}

// Example usage
const product1 = new Product(1, "Laptop", 200);
const product2 = new Product(2, "Mobile", 200);

const order1 = new ProductManager();
order1.addProduct(product1);
order1.addProduct(product2);

const products = order1.getProducts();
const amount = new PricingCalculator().calculatePricing(products);

const invoice = new InvoiceGenerator();
invoice.generateInvoice(products, amount);

// Optionally process payment
const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment({ products, amount });




