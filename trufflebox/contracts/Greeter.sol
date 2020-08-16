pragma solidity >=0.4.21 <0.7.0;

contract Greeter {

    string public greeting;

    constructor() public {
        greeting = "Hello";
    }

    function setGreeting(string memory g) public {
        greeting = g;
    }

}