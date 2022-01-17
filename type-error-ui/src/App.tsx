import React, { useEffect, useState } from "react";

function App() {
  const [err, setErr] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000").catch((err) => {
      setErr(`${err}`);
    });
  });
  return <>{err}</>;
}

export default App;
