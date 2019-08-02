import { observable, action } from "mobx";

class RootStore {
  @observable tab = "A";

  @action
  setTab = active => {
    this.tab = active;
  };
}
export default new RootStore();
