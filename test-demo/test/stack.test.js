//describe - define a test suite; describe what it is you're testing,
//takes a CB as a second argument, which we can define multiple individual tests

//test - it = individual tests

class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }
}

describe('My Stack', () => {

    it('is created empty', () => {
        const stack = new Stack();

        expect(stack.top).toBe(-1); //toBe matcher - looks for referential equality between two objects
        //two different objects in memory
        expect(stack.items).toEqual({}); //toEqual - checks for value equality instead of obj reference itself
    });

    it.todo('can push to the top');

    it.todo('can pop off');

})