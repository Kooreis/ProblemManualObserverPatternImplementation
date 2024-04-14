```typescript
class Subject {
    private observers: Observer[] = [];

    public subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    public unsubscribe(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    public notify(data: any): void {
        for (let observer of this.observers) {
            observer.update(data);
        }
    }
}

interface Observer {
    update(data: any): void;
}

class ConcreteObserver implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public update(data: any): void {
        console.log(`${this.name} received ${data}`);
    }
}

let subject = new Subject();

let observer1 = new ConcreteObserver("Observer 1");
let observer2 = new ConcreteObserver("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Hello!");

subject.unsubscribe(observer1);

subject.notify("Goodbye!");
```