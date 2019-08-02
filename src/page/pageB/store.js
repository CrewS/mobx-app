import { observable, action } from "mobx";

class SearchStore {
  @observable searchText = "";

  @action
  setSearchText = searchText => {
    this.searchText = searchText;
  };
}
export default new SearchStore();
