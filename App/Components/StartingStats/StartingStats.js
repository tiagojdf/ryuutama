import React, {
  View,
  Text,
  TouchableHighlight,
  Component
} from 'react-native'

import { connect } from 'react-redux'

import {updateStats} from '../../State/player.actions'
import {nextStep} from '../../State/step.actions'

import styles from './StartingStats.styles'

class StartingStats extends Component {
  constructor(dispatch, props) {
    super(props)
    this.state = {
      stats: {
        STR: 6,
        DEX: 6,
        INT: 6,
        SPI: 6,
      },
      valid: true,
    }
  }

  _validateStats(stats) {
    return Object.keys(stats).map((STAT) => {
      return stats[STAT]
    }).reduce((a,b) => a + b) === 24
  }
  _increase(STAT) {
    var stats = this.state.stats
    if (stats[STAT] < 8) {
      stats[STAT] = stats[STAT] + 2
      this.setState(
        {
          stats: stats,
          valid: this._validateStats(stats)
        })
    }
  }
  _decrease(STAT) {
    var stats = this.state.stats
    if (stats[STAT] > 4) {
      stats[STAT] = stats[STAT] - 2
      this.setState(
        {
          stats: stats,
          valid: this._validateStats(stats)
        })
    }
  }

  render() {
    return (
      <View style={[styles.container, !this.state.valid && styles.invalid]}>
      {
        Object.keys(this.state.stats).map((STAT) => {return (
          <View key={STAT}>
          <Text>{STAT}: {this.state.stats[STAT]}</Text>
          <TouchableHighlight onPress={() => this._increase(STAT)}>
            <Text> + </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._decrease(STAT)}>
            <Text> - </Text>
          </TouchableHighlight>
          </View>
        )})
      }
      <TouchableHighlight onPress={() => {
          if (this.state.valid) {
            this.props.dispatch(updateStats(this.state.stats))
            this.props.dispatch(nextStep())
          }
        } }>
        <Text> Select </Text>
      </TouchableHighlight>
      </View>
    )
  }
}


StartingStats.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
}
StartingStats = connect()(StartingStats)

module.exports = StartingStats
