import React, {
  View,
  Text,
} from 'react-native'

const CharacterView = ({ playerClass, playerType, stats }) => (
    <View>
      <Text>{playerClass.name}</Text>
      <Text>{playerType.name}</Text>
      {
        Object.keys(stats).map((STAT) => {return (
          <Text key={STAT}>{STAT}: {stats[STAT]}</Text>
          )
        })
      }
    </View>
  )

CharacterView.propTypes = {
  playerClass: React.PropTypes.object.isRequired,
  playerType: React.PropTypes.object.isRequired,
  stats: React.PropTypes.object.isRequired,
}

module.exports = CharacterView
