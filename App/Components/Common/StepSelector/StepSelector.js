import React, {
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux'

import {goToStep} from '../../../State/step.actions'

import styles from './StepSelector.styles'

let StepSelector = ({ dispatch }) => (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => dispatch(goToStep(0))}><Text>Class</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => dispatch(goToStep(1))}><Text>Type</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => dispatch(goToStep(2))}><Text>Stats</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => dispatch(goToStep(3))}><Text>Character</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => dispatch(goToStep(4))}><Text>Overview</Text></TouchableHighlight>
    </View>
  )

StepSelector.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
}
StepSelector = connect()(StepSelector)

module.exports = StepSelector
