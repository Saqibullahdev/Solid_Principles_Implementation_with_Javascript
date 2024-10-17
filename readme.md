# SOLID Principles in JavaScript

This repository showcases how to implement the SOLID design principles in JavaScript. SOLID is a set of five principles that help developers create clean, scalable, and maintainable code for object-oriented programming.

## SOLID Principles

1. **Single Responsibility Principle (SRP)**:
   - A class should have only one reason to change, meaning it should have only one job or responsibility.
   - Example: Separation of concerns in classes like `ProductManager`, `InvoiceGenerator`, and `PaymentProcessor`.

2. **Open-Closed Principle (OCP)**:
   - Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
   - Example: New payment methods (like `CreditCardProcessor` and `PaypalProcessor`) can be added without modifying the existing `PaymentProcessor`.

3. **Liskov Substitution Principle (LSP)**:
   - Subtypes must be substitutable for their base types without altering the correctness of the program.
   - Example: Any payment processor (like `CreditCardProcessor` or `PaypalProcessor`) can be passed into the `PaymentProcessor` without changing its functionality.

4. **Interface Segregation Principle (ISP)**:
   - Clients should not be forced to depend on interfaces they do not use. Prefer many specific interfaces over a single, general-purpose interface.
   - Example: Separation of concerns for different processing tasks into small, focused classes.

5. **Dependency Inversion Principle (DIP)**:
   - High-level modules should not depend on low-level modules. Both should depend on abstractions (interfaces).
   - Example: `PaymentProcessor` depends on an abstraction (`IPaymentProcessor`), not on concrete implementations.

## Folder Structure

