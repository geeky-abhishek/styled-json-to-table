# styled-json-to-table

React library to convert JSON to HTML <table>

# Installation

`npm install styled-json-to-table`

# Usage



```

import { JsonToTable } from "styled-json-to-table";

function App() {
  // ===================== //
  // JSON Object
  // ===================== //
  const myJson = {
    "Student": { name: "Jack", email: "jack@xyz.com" },
    "Student id": 888,
    "Sponsors": [
      { name: "john", email: "john@@xyz.com" },
      { name: "jane", email: "jane@@xyz.com" }
    ]
  };

  return (
    <div className="App">
      {/* ===================== */}
      {/* HOW TO USE IT         */}
      {/* ===================== */}
      <JsonToTable json={myJson} />
      {/* ===================== */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```

