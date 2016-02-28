import React, {
  View,
  Text,
  TouchableHighlight
} from 'react-native'

import styles from './PlayerClass.styles'

const PlayerClass = ({playerClass, selectClass }) => (
    <View style={styles.container}>
      <Text style={styles.name}>{playerClass.name}</Text>
      <Text style={styles.description}>{playerClass.description}</Text>
      <View style={styles.skills}>
        {playerClass.skills.map( (skill) => {
          return (
            <Text key={skill} style={styles.skill}>*{skill} </Text>
          )
        })}
      </View>
      <View style={styles.select}>
        <TouchableHighlight onPress={() => selectClass(playerClass)}>
          <Text style={styles.selectText}>Select</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
PlayerClass.propTypes = {
  selectClass: React.PropTypes.func.isRequired,
  playerClass: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    skills: React.PropTypes.array.isRequired,
  }).isRequired,
}

module.exports = PlayerClass
