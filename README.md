# Question: How do you implement a manual observer pattern (subscribe and notify system)? JavaScript Summary

The provided JavaScript code implements a manual observer pattern, also known as a subscribe and notify system, using two classes: Subject and Observer. The Subject class maintains a list of observers and provides methods to subscribe (add) an observer, unsubscribe (remove) an observer, and notify all current observers with some data. The Observer class represents an observer with a name and an update method, which logs a message when the observer receives data. In the usage example, three Observer instances are created and subscribed to a Subject instance. The Subject instance then notifies all observers with a message, which causes each observer to log a message. After that, one observer is unsubscribed from the Subject instance, and the Subject instance notifies the remaining observers with another message. This code provides a way to manage a list of observers and notify them of changes, which is a common requirement in many software systems.

---

# TypeScript Differences

The TypeScript version of the solution uses similar logic to the JavaScript version, but it includes some TypeScript-specific features that enhance the code's readability, maintainability, and type safety.

1. Type Annotations: TypeScript allows us to specify the types of variables, function parameters, and function return values. In the TypeScript version, the `Subject` class has a private property `observers` which is an array of `Observer` type. The `subscribe`, `unsubscribe`, and `notify` methods also have type annotations for their parameters and return types (`void` in this case). This makes the code more predictable and less prone to runtime errors due to incorrect types.

2. Interfaces: TypeScript introduces the concept of interfaces, which are used to define the shape of an object. In this case, an `Observer` interface is defined with an `update` method. This ensures that any class that implements the `Observer` interface must have an `update` method, providing a form of contract that enforces certain properties or methods to be present in a class.

3. Class Implementations: The `ConcreteObserver` class implements the `Observer` interface, ensuring it adheres to the contract defined by the interface. This is a feature not available in JavaScript.

4. Private Properties: TypeScript supports `private` properties in classes, which restricts their access to the class they are defined in. In the TypeScript version, the `observers` array in the `Subject` class and the `name` property in the `ConcreteObserver` class are marked as private.

5. Different Unsubscribe Method: The TypeScript version uses `Array.prototype.indexOf` and `Array.prototype.splice` to remove an observer, while the JavaScript version uses `Array.prototype.filter`. Both methods achieve the same result, but the TypeScript version might be slightly more efficient for large arrays as it stops searching once it finds the observer to remove.

6. Usage of `let` instead of `const`: In the TypeScript version, `let` is used to declare the subject and observers, which allows reassignment. In the JavaScript version, `const` is used, which prevents reassignment. This doesn't affect the functionality in this case, but it's a difference worth noting.

---

# C++ Differences

The C++ version of the observer pattern is more complex than the JavaScript version due to the nature of the language. Here are some key differences:

1. Inheritance: In C++, the observer and subject classes are defined using inheritance from IObserver and ISubject interfaces. This is a common practice in C++ to ensure that certain methods are implemented in the classes that inherit these interfaces. In JavaScript, there is no explicit interface or inheritance used, although the same concept is applied by defining methods in the class that are expected to be overridden.

2. Memory Management: In C++, you need to manually manage memory. This is why you see the 'new' keyword when creating observers and the 'delete' keyword when done with them. In JavaScript, memory management is handled automatically, so you don't see this.

3. Type Safety: C++ is a statically typed language, so you need to define the type of each variable, parameter, and return value. JavaScript is dynamically typed, so types are checked at runtime and not explicitly stated in the code.

4. Iteration: In the C++ version, iteration over the list of observers is done using an iterator, which is a common practice in C++. In JavaScript, iteration is done using the forEach method, which is simpler and more straightforward.

5. Message Passing: In the C++ version, the message is passed to the observers through the Update method. In JavaScript, the message is passed directly to the update method of each observer.

6. Observer Registration: In the C++, observers register themselves with the subject when they are created. In JavaScript, observers are manually subscribed to the subject after they are created.

7. Method Naming: The C++ version uses CamelCase for method names (e.g., Attach, Detach, Notify), while the JavaScript version uses camelCase (e.g., subscribe, unsubscribe, notify). This is a common naming convention difference between the two languages.

---
