import React from "react";
import TodoPage from "./page/TodoPage";
import StyleProvider from "./providers/StyleProvider";

function App() {
  return (
    <div className="App">
      <StyleProvider>
        <TodoPage/>
      </StyleProvider>
    </div>
  );
}

export default App;
