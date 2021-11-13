import React, { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [data, setData] = useState({
    data: 'naaada',
    loaded: false,
  });

  return (
    <Context.Provider value={ data }>
      {children}
    </Context.Provider>
  );
};

export default Provider;