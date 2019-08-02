import React from "react";
import store from "./store";
import { observer } from "mobx-react";

@observer
class PageA extends React.Component {
  render() {
    console.log("render");
    return (
      <div className="content-box">
        <div style={{ marginBottom: "10px" }}>demo1 计数器</div>
        <div>
          <input
            onClick={() => {
              store.setCount(store.count + 1);
            }}
            type="button"
            value="+"
            id="add"
          />
          <span id="incomeLabel">{store.count}</span>
          <input
            onClick={() => {
              store.setCount(store.count - 1);
            }}
            type="button"
            value="-"
            id="minus"
          />
        </div>
      </div>
    );
  }
}
export default PageA;
