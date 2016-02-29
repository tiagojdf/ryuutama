import React, {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  Component
} from 'react-native'
import { connect } from 'react-redux'

// import {goToStep} from '../../../State/step.actions'

import styles from './StartingStats.styles'

const STATS = ['STR', 'DEX', 'INT', 'SPI']

class StartingStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      STR: '6',
      DEX: '6',
      INT: '6',
      SPI: '6',
    }
  }
  render() {
    return (
      <View style={styles.container}>
      {
        STATS.map((STAT) => {return (
          <View key={STAT}>
          <Text>{STAT}</Text>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(VALUE) => this.setState({[STAT]:VALUE})}
            value={this.state[STAT]}
          />
          </View>
        )})
      }
      </View>
    )
  }
}


StartingStats.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
}
StartingStats = connect()(StartingStats)

module.exports = StartingStats
