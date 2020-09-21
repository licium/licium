const ISCCRegistry = artifacts.require("ISCCRegistry");
const truffleAssert = require('truffle-assertions');

contract("ISCCRegistry", accounts => {
    let registry;
    beforeEach(async () => {
        registry = await ISCCRegistry.deployed();
    })

    it("should emit decleration events", async () => {
        let bytesHex = web3.utils.fromAscii("12345678901234567890123456789012");
        let isccBytes = web3.utils.hexToBytes(bytesHex)

        let tophashHex = web3.utils.fromAscii("foobarBaz");
        let tophashBytes = web3.utils.hexToBytes(tophashHex)

        const decleration = await registry.declare(isccBytes, tophashBytes);

        truffleAssert.eventEmitted(decleration, 'ISCC', (ev) => {
            return ev.iscc === bytesHex 
              && ev.actor === accounts[0]
              && ev.tophash ===  tophashHex;
        });
    })

})