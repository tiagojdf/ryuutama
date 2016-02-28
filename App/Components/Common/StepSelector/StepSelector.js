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
      <TouchableHighlight onPress={() => dispatch(goToStep(0))}><Text>0</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => dispatch(goToStep(1))}><Text>1</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => dispatch(goToStep(2))}><Text>2</Text></TouchableHighlight>
    </View>
  )

StepSelector.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
}
StepSelector = connect()(StepSelector)

module.exports = StepSelector
