const ISCCRegistry = artifacts.require("ISCCRegistry");
const truffleAssert = require('truffle-assertions');

contract("ISCCRegistry", accounts => {
    let registry;
    beforeEach(async () => {
        registry = await ISCCRegistry.deployed();
    })

    it("should emit decleration events", async () => {
        let bytesHex = web3.utils.fromAscii("12345678901234567890123456789012");
        let bytes = web3.utils.hexToBytes(bytesHex)
        const register = await registry.declare(bytes);

        truffleAssert.eventEmitted(register, 'ISCC', (ev) => {
            return ev.iscc === bytesHex;
        });
    })

})