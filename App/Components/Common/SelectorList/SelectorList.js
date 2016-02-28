import React, {
  Component,
  ListView,
} from 'react-native'

var Selector = require('../Selector/Selector')

class SelectorList extends Component {
  constructor(props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  }
  render() {
    return (
      <ListView
        dataSource={this.ds.cloneWithRows(this.props.list)}
        renderRow={(data) => (
          this.displayName: 'onRenderRow',
          <Selector
          key={data.name}
          data={data}
          select={this.props.onSelect}/>
        )}
      />
    )
  }
}

SelectorList.propTypes = {
  list: React.PropTypes.array,
  onSelect: React.PropTypes.func,
}

module.exports = SelectorList
