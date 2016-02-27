import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native'

import styleVariables from '../Config/styleVariables'

var Header = require('./Header')
var PlayerClass = require('./PlayerClass')

import playerClasses from '../Data/playerClasses'

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: styleVariables.colors.background
  }
});


class PlayerContainer extends Component {

  constructor(props) {
    super(props);
    this.playerClass;
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(playerClasses),
      step: 1,
    };
    this._selectClass = (playerClass) => {
      this.setState({
        playerClass: playerClass,
        step: this.state.step + 1,
      });
      console.warn(this.state.playerClass.name);
    };
  }


  _renderRow(playerClass) {
    return <PlayerClass key={playerClass.name} playerClass={playerClass} selectClass={this._selectClass}/>;
  }

  renderStep() {
    switch (this.state.step) {
      case 1:
        return (
          <View>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            />
          </View>
        );
      case 2:
        return (<Text>To do</Text>);
      case 3:
        return (<Text>Shit happens</Text>);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.mainContainer}>
          {this.renderStep()}
        </View>
      </View>
    );
  }
}

module.exports = PlayerContainer;
