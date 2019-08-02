import React from "react";
import { observer } from "mobx-react";

@observer
class SearchShow extends React.Component {
  render() {
		const { searchStore } = this.props;
    return <span>{searchStore.searchText}</span>;
  }
}
export default SearchShow;
