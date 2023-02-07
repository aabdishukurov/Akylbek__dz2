import React, { createContext, useState } from "react";
import TodoPage from "./page/TodoPage";
import StyleProvider from "./providers/StyleProvider";

export const Context = createContext();

function App() {
  const [value, setValue] = useState(0);
  const [search, setSearch] = useState("");
  
  return (
    <Context.Provider value={{value, setValue, search, setSearch}}>
      <div>
        <StyleProvider>
          <TodoPage/>
        </StyleProvider>
      </div>
    </Context.Provider>
  );
}

export default App;







const obj = {
  John: 19;
  Adil: 23;
  Islam: 20;
  "name", "age"
}

