const ISCCRegistry = artifacts.require("ISCCRegistry");
const truffleAssert = require('truffle-assertions');

contract("ISCCRegistry", accounts => {
    let registry;
    beforeEach(async () => {
        registry = await ISCCRegistry.deployed();
    })

    it("should emit registration events", async () => {
        let bytesHex = web3.utils.fromAscii("12345678901234567890123456789012");
        let bytes = web3.utils.hexToBytes(bytesHex)
        const register = await registry.register(bytes);

        truffleAssert.eventEmitted(register, 'ISCC', (ev) => {
            return ev.iscc === bytesHex;
        });
    })

    // it("should greet with new greeting", async () => {
    //     const newGreeting = "Foobar";

    //     await greeter.setGreeting(newGreeting);
    //     const greeting = await greeter.greeting();

    //     assert.equal(greeting, newGreeting);
    // })
})