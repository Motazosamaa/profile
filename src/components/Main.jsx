import React from "react";
import '../styles/main.css';
import { Button } from "./reusable/Button";
export const Main = () => {
  return (
    <div className="main-component ">
      <div className="row  h-100  ">
        <div className="mx-5 ">
          <div className="main-content  ">
          <Button text="Contact Me"/>
          </div>
        </div>
      </div>
    </div>
  );
};
