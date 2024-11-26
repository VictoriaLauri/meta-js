class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.firstName}`);
    }
}

const skills = {
    code(thing) {
        console.log(`${this.firstName} is coding ${thing}`);
    },
    design(thing) {
        console.log(`${this.firstName} is designing ${thing}`);
    }
}

class Developer extends Human {}
Object.assign(Developer.prototype, {
    code: skills.code
});

class Designer extends Human {}
Object.assign(Designer.prototype, {
    design: skills.design
});


class DeveloperDesigner extends Human {}
Object.assign(DeveloperDesigner.prototype, {
    code: skills.code,
    design: skills.design
});

const dev = new DeveloperDesigner('Tom', 'Smith');
dev.sayHello();
dev.code('app');
dev.design('website');

const des = new Designer('Alice', 'Johnson');
des.sayHello();
des.design('logo');

const dev2 = new Developer('Bob', 'Brown');
dev2.sayHello();   
dev2.code('game');