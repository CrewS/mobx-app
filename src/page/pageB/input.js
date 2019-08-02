import React from "react";
import { observer } from "mobx-react";

@observer
class SearchInput extends React.Component {
  handleInputChanged = event => {
    const { searchStore } = this.props;
    searchStore.setSearchText(event.target.value);
  };

  render() {
    const { searchStore } = this.props;
    return <input value={searchStore.searchText}  onChange={this.handleInputChanged} />;
  }
}
export default SearchInput;
