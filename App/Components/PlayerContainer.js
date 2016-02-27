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

import {playerClasses} from '../Data/playerClasses'

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
  },
})

import {store} from '../State/store'
import {nextStep} from '../State/step.actions'
import {selectClass} from '../State/player.actions'

class PlayerContainer extends Component {

  constructor(props) {
    super(props)
    this.playerClass
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: this.ds.cloneWithRows(playerClasses),
    }
    this._selectClass = (playerClass) => {
      store.dispatch(selectClass(playerClass))
      store.dispatch(nextStep())
    }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }
  componentWillUnmount() { this.unsubscribe() }

  _renderRow(playerClass) {
    return <PlayerClass
      key={playerClass.name}
      playerClass={playerClass}
      selectClass={this._selectClass}/>
  }

  renderStep(step) {
    switch (step) {
      case 0:
        return (
            <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            />
        )
      case 1:
        return (<Text>To do</Text>)
      case 2:
        return (<Text>Shit happens</Text>)
    }
  }
  render() {
    const state = store.getState()
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.mainContainer}>
          {this.renderStep(state.step)}
        </View>
      </View>
    )
  }
}

module.exports = PlayerContainer
