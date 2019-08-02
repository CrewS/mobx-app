import React from "react";
import { observer } from "mobx-react";
import "./App.css";
import PageB from "./page/pageB";
import PageA from "./page/pageA";
import Store from "./store";

@observer
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ul className="menu-list">
          <li className="menu"
            onClick={() => {
              Store.setTab('A');
            }}
          > demo1</li>
          <li className="menu"
            onClick={() => {
              Store.setTab('B');
            }}
          > demo2 </li>
        </ul>
        <div className="content">

          {Store.tab === "A" ? <PageA rootStore={Store} /> : <PageB />}
        </div>
      </div>
    );
  }
}

export default App;
