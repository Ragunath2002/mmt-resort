import React from "react";
import { useContext } from "react";
import ThemeContext from './create_context';

function Context() {
  const value = useContext(ThemeContext);
  return (
    <div className={"register"}>
      dfsd
      {value}
    </div>
  );
};

export default Context;
