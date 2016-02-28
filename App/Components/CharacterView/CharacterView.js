import React, {
  View,
  Text,
} from 'react-native'

const CharacterView = ({ playerClass, playerType }) => (
    <View>
      <Text>{playerClass.name}</Text>
      <Text>{playerType.name}</Text>
    </View>
  )

CharacterView.propTypes = {
  playerClass: React.PropTypes.object.isRequired,
  playerType: React.PropTypes.object.isRequired,
}

module.exports = CharacterView