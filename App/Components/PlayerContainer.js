import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import styleVariables from '../Config/styleVariables'

var Header = require('./Header/Header')
var SelectorList = require('./Common/SelectorList/SelectorList')

import {playerClasses} from '../Data/playerClasses'
import {playerTypes} from '../Data/playerTypes'

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

import {nextStep} from '../State/step.actions'
import {selectClass, selectType} from '../State/player.actions'

class PlayerContainer extends Component {

  renderStep(step) {
    switch (step) {
      case 0:
        return <SelectorList list={playerClasses} onSelect={this.props.onSelectClass}/>
      case 1:
        return <SelectorList list={playerTypes} onSelect={this.props.onSelectType}/>
      case 2:
        console.log(this.props.player)
        return (<Text>Check developer console for result</Text>)
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
  player: React.PropTypes.object.isRequired,
  onSelectClass: React.PropTypes.func.isRequired,
  onSelectType: React.PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    step: state.step,
    player: state.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectClass: playerClass => {
      dispatch(selectClass(playerClass))
      dispatch(nextStep())
    },
    onSelectType: playerType => {
      dispatch(selectType(playerType))
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
