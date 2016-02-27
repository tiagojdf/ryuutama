import React, {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
})

const PlayerClass = ({playerClass, selectClass }) => (
    <View style={styles.container}>
      <Text>{playerClass.name}</Text>
      <Text>{playerClass.description}</Text>
      {playerClass.skills.map( (skill) => {
        return (
          <Text key={skill}>{skill}</Text>
        )
      })}
      <TouchableHighlight onPress={() => selectClass(playerClass)}>
        <Text>Select</Text>
      </TouchableHighlight>
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
