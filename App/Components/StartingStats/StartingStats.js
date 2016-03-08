import React, {
  View,
  Text,
  TouchableHighlight,
  Component
} from 'react-native'

import { connect } from 'react-redux'

import {
  updateStats,
} from '../../State/player.actions'

import {nextStep} from '../../State/step.actions'

import styles from './StartingStats.styles'

class StartingStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valid: true,
    }
  }

  _validateStats(stats) {
    return Object.keys(stats).map((STAT) => {
      return stats[STAT]
    }).reduce((a,b) => a + b) === 24
  }
  _increase(STAT) {
    var stats = this.props.stats
    if (stats[STAT] < 8) {
      stats[STAT] = stats[STAT] + 2
      this.setState(
        {
          valid: this._validateStats(stats)
        })
    }
  }
  _decrease(STAT) {
    var stats = this.props.stats
    if (stats[STAT] > 4) {
      stats[STAT] = stats[STAT] - 2
      this.setState(
        {
          valid: this._validateStats(stats)
        })
    }
  }

  render() {
    return (
      <View style={[styles.container, !this.state.valid && styles.invalid]}>
      {
        Object.keys(this.props.stats).map((STAT) => {return (
          <View key={STAT}>
          <Text>{STAT}: {this.props.stats[STAT]}</Text>
          <TouchableHighlight onPress={() => this._increase(STAT)}>
            <Text> + </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._decrease(STAT)}>
            <Text> - </Text>
          </TouchableHighlight>
          </View>
        )})
      }
      <TouchableHighlight onPress={() => this.props.onSelectStats(this.props.stats)}>
        <Text> Select </Text>
      </TouchableHighlight>
      </View>
    )
  }
}

StartingStats.propTypes = {
  stats: React.PropTypes.object.isRequired,
  onSelectStats: React.PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    stats: state.player.stats
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectStats: stats => {
      dispatch(updateStats(stats))
      dispatch(nextStep())
    }
  }
}

StartingStats = connect(
  mapStateToProps,
  mapDispatchToProps
)(StartingStats)

module.exports = StartingStats
