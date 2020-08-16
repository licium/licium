import ComplexStorage from "./contracts/ComplexStorage.json";
import SimpleStorage from "./contracts/SimpleStorage.json";
import TutorialToken from "./contracts/TutorialToken.json";
import Greeter from "./contracts/Greeter.json";

const options = {
  contracts: [SimpleStorage, ComplexStorage, TutorialToken, Greeter],
  events: {
    SimpleStorage: ["StorageSet"],
  },
};

export default options;
