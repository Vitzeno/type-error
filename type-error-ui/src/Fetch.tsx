import { FC, useEffect, useState } from "react";

export const Fetch: FC = () => {
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMess, setErrorMess] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000")
      .then(() => {
        setErrorTitle("ErrorMessage: ");
        setErrorMess("Hello There!");
      })
      .catch((err) => {
        setErrorTitle(`${err.name}:`);
        setErrorMess(`${err.message}`);
      });
  });

  return (
    <>
      <div>
        <h1>{errorTitle}</h1>
      </div>
      <div>
        <h2>{errorMess}</h2>
      </div>
    </>
  );
};
