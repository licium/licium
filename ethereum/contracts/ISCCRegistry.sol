// SPDX-License-Identifier: MIT
pragma solidity >=0.7.1 <0.8.0;

contract ISCCRegistry {

    event ISCC(bytes32 iscc);

    function declare(bytes32 iscc) public {
        emit ISCC(iscc);
    }

}