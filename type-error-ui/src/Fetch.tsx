import React, { FC, useEffect, useState } from "react";

export const Fetch: FC = () => {
  const [err, setErr] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000")
      .then(() => setErr("Hello There!"))
      .catch((err) => setErr(`${err}`));
  });

  return <>{err}</>;
};
