import{ useState } from  "react";

import NumberGrid from "./components/NumberGrid";
import UserNumbers from "./components/UserNumbers";
import { isDistinctNumber } from "./utils";

function App () {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const handleSelectNumber = (event) => {
    if ( !isDistinctNumber(event.target.value, selectedNumbers) ) {
      return alert(`Number ${event.target.value} has already been selected!`);
    }

    setSelectedNumbers(selectedNumbers.concat(event.target.value));
    console.log("button", event.target.value, "selected");
  };

  return (
    <div>
      <h1>Lotto App</h1>
      Select your <b>seven</b> lucky lotto numbers!
      <NumberGrid handleSelectNumber={handleSelectNumber} />
      <UserNumbers selectedNumbers={selectedNumbers} />
    </div>
  );
}

export default App;