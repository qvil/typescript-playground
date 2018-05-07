import * as React from "react";
import Person from "./Person";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Person name="qvil" age={29} />
      </div>
    );
  }
}

export default App;
