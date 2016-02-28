import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native'

import styleVariables from '../Config/styleVariables'

var Header = require('./Header/Header')
var PlayerClass = require('./PlayerClass/PlayerClass')

import {playerClasses} from '../Data/playerClasses'

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    padding: 5,
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
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }
  componentWillUnmount() { this.unsubscribe() }

  _renderRow(playerClass) {
    return <PlayerClass
      key={playerClass.name}
      playerClass={playerClass}
      selectClass={this.props.onSelectClass}/>
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
    return (
      <View style={styles.container}>
        <Header title={'Ryuutama'}/>
        <View style={styles.mainContainer}>
          {this.renderStep(this.props.step)}
        </View>
      </View>
    )
  }
}

PlayerContainer.propTypes = {
  step: React.PropTypes.number.isRequired,
  onSelectClass: React.PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    step: state.step
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectClass: playerClass => {
      dispatch(selectClass(playerClass))
      dispatch(nextStep())
    }
  }
}

import { connect } from 'react-redux'

PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer)

module.exports = PlayerContainer
