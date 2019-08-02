import React from "react";
import InputView from "./input";
import ShowView from "./show";
import store from "./store";

class PageB extends React.Component {
  render() {
    return (
      <div className="content-box">
        <div style={{ marginBottom: "10px" }}>demo2 跨组件通信</div>
        <div>
          <span>InputView 组件</span>
          <span>输入值：</span>
          <InputView searchStore={store} />
        </div>
        <div>
          <span>ShowView 组件</span>
          <span>响应输出值:</span>
          <ShowView searchStore={store} />
        </div>
      </div>
    );
  }
}
export default PageB;
