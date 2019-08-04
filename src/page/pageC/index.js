import React from "react";
import store from "./store";
import { observer } from "mobx-react";

@observer
class PageA extends React.Component {
  componentWillMount(){
    // store.reset();
  }
  componentWillUnmount(){
    store.reset();
  }
  render() {
    console.log("render");
    const { list } = store;
    return (
      <div className="content-box">
        <div style={{ marginBottom: "10px" }}>demo3 异步action</div>
        <div>
          {
            store.loading === true ?
            '加载中....'
            :
            <div
              onClick={() => {
                store.getData();
              }}
              className="btn"
            >
              点击获取新数据
            </div>
          }
          <ul>
            {list.map(x => {
              return <li key={x}>{x}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default PageA;
