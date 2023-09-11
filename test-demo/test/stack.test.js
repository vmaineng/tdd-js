//describe - define a test suite; describe what it is you're testing,
//takes a CB as a second argument, which we can define multiple individual tests

//test - it = individual tests

class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top += 1; 
        this.items[this.top] = value;
    }

    pop(value) {
        this.items[this.top] = value;
    }
}

describe('My Stack', () => {
    let stack;

    beforeEach(() => { //before each task, create a new Stack
        stack = new Stack();
    });


    it('is created empty', () => {
        const stack = new Stack();

        expect(stack.top).toBe(-1); //toBe matcher - looks for referential equality between two objects
        //two different objects in memory
        expect(stack.items).toEqual({}); //toEqual - checks for value equality instead of obj reference itself
    });

//set up and tear down - to prevent code duplication
    it('can push to the top', () => {
        stack.push('rawr')
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('rawr');
    });

    it('can pop off', () => {
        stack.pop();
    });

})