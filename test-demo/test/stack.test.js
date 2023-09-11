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

    it('is created empty');

    it('can push to the top');

    it('can pop off');

})