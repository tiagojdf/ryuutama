import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native'

var Header = require('./Header/Header')
var CharacterView = require('./CharacterView/CharacterView')
var SelectorList = require('./Common/SelectorList/SelectorList')
var StepSelector = require('./Common/StepSelector/StepSelector')

import {playerClasses} from '../Data/playerClasses'
import {playerTypes} from '../Data/playerTypes'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F8E9'
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
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
      default:
        return <CharacterView {...this.props.player}/>
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title={'Ryuutama'}/>
        <StepSelector />
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
