class Test {
    private testProp = 1;

    constructor() {
        this.test();
    }

    private test() {
        console.log('test', this.testProp);
    }
}

new Test();
