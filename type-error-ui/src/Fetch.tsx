import { FC, useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";
import "./fetch.css";

export const Fetch: FC = () => {
  const [errorTitle, setErrorTitle] = useState("...");
  const [errorMess, setErrorMess] = useState("...");

  useEffect(() => {
    fetch("http://localhost:8000").catch((err) => {
      setErrorTitle(`${err.name}`);
      setErrorMess(`${err.message}`);
    });
  });

  return (
    <div className="center">
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Message</td>
            <td>Browser Name</td>
            <td>Browser Version</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{errorTitle}</td>
            <td>{errorMess}</td>
            <td>{UAParser().browser.name}</td>
            <td>{UAParser().browser.version}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
