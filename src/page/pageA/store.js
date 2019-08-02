import { observable, action } from "mobx";

class Store {
  @observable count = 0;

  @action
  setCount = count => {
    this.count = count;
  };
}
export default new Store();
