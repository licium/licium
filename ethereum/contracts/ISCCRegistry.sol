// SPDX-License-Identifier: MIT
pragma solidity >=0.7.1 <0.8.0;

contract ISCCRegistry {

    event ISCC(address indexed actor, bytes iscc, bytes tophash);

    function declare(bytes calldata iscc, bytes calldata tophash) public {
        // TODO: validate iscc
        emit ISCC(msg.sender, iscc, tophash);
    }

}