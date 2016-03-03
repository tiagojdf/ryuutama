import React, {
  View,
  Text,
} from 'react-native'

const CharacterOverview = ({
  playerClass,
  playerType,
  stats,
  name,
  gender,
  age,
  hometown,
  appearance,
  notes,
}) => (
    <View>
      <Text>Name: {name}</Text>
      <Text>Gender: {gender}</Text>
      <Text>Age: {age}</Text>
      <Text>{playerClass.name}</Text>
      <Text>{playerType.name}</Text>
      {
        Object.keys(stats).map((STAT) => {return (
          <Text key={STAT}>{STAT}: {stats[STAT]}</Text>
          )
        })
      }
      <Text>Hometown: {hometown}</Text>
      <Text>Appearanc: {appearance}</Text>
      <Text>Notes: {notes}</Text>
    </View>
  )

CharacterOverview.propTypes = {
  playerClass: React.PropTypes.object.isRequired,
  playerType: React.PropTypes.object.isRequired,
  stats: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired,
  gender: React.PropTypes.string,
  age: React.PropTypes.string,
  hometown: React.PropTypes.string,
  appearance: React.PropTypes.string,
  notes: React.PropTypes.string,
}

module.exports = CharacterOverview
