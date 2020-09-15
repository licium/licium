pragma solidity >=0.4.21 <0.7.0;

contract ISCCRegistry {

    event ISCC(bytes32 iscc);

    // struct ISCC {
    //     bytes9 metaId;
    //     bytes9 contentId;
    //     bytes9 dataId;
    //     bytes9 instanceId;
    // }

    constructor() public {

    }

    function register(bytes32 iscc) public {
        emit ISCC(iscc);
    }

}