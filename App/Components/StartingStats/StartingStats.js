import React, {
  View,
  Text,
  TouchableHighlight,
  Component
} from 'react-native'
var StatSelector = require('../Common/StatSelector/StatSelector')

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
      <View style={styles.container}>
        <View style={styles.statsContainer}>
          {
            Object.keys(this.props.stats).map((STAT) => {return (
              <StatSelector key={STAT}
                styles={styles.stat}
                stat={STAT}
                value={this.props.stats[STAT]}
                increase={() => this._increase(STAT)}
                decrease={() => this._decrease(STAT)} />
            )})
          }
        </View>
        <TouchableHighlight onPress={() => this.state.valid && this.props.onSelectStats(this.props.stats)}>
          <View style={[styles.select, !this.state.valid && styles.invalid]}>
            <Text style={styles.selectText}> Select </Text>
          </View>
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
    stats: Object.assign({}, state.player.stats)
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
