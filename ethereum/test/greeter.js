const Greeter = artifacts.require("Greeter");

contract("Greeter", accounts => {
    let greeter;
    beforeEach(async () => {
        greeter = await Greeter.deployed();
    })

    it("should initially say hello", async () => {
        const greeting = await greeter.greeting();
        assert.equal(greeting, 'Hello');
    })

    it("should greet with new greeting", async () => {
        const newGreeting = "Foobar";

        await greeter.setGreeting(newGreeting);
        const greeting = await greeter.greeting();

        assert.equal(greeting, newGreeting);
    })
})