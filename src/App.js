import React from "react";
import "./App.css";
import QRCode from "react-qr-code";
const App = () => {
  return (
    <div>
      <QRCode
        value="this is the test"
        size={200}
        level={"H"}
        includeMargin={true}
      />
    </div>
  );
};

export default App;
