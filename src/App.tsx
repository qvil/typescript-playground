import * as React from "react";
import { createClock, DigitalClock } from "./Clock";
import Person from "./Person";
import { myCuteCat } from "./components/generic/generic";

const digital = createClock(DigitalClock, 12, 30);
digital.tick();

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Person name="qvil" age={29} />
        {myCuteCat("jelly", 2)}
      </div>
    );
  }
}

export default App;
