import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Blackjack } from "./components/Blackjack";
import { Provider } from "react-redux";
import store from "./store";

// wrap Blackjack component inside the provider
// pass the store to the provider

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Blackjack />
      </div>
    </Provider>
  );
}

export default App;
