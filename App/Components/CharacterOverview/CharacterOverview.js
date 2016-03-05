import React, {
  View,
  Text,
  StyleSheet,
} from 'react-native'

const CharacterOverview = ({
  playerClass,
  playerType,
  stats,
  substats,
  name,
  gender,
  age,
  hometown,
  appearance,
  notes,
}) => (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.cell}>Name: {name}</Text>
        <Text style={styles.cell}>{gender}</Text>
        <Text style={styles.cell}>Age: {age}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>Class: {playerClass.name}</Text>
        <Text style={styles.cell}>Type: {playerType.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>HP: {substats.maxHp}/{substats.maxHp}</Text>
        <Text style={styles.cell}>MP: {substats.maxMp}/{substats.maxMp}</Text>
      </View>
      <View style={styles.row}>
        {
          Object.keys(stats).map((STAT) => {return (
            <Text style={styles.cell} key={STAT}>{STAT}: {stats[STAT]}</Text>
          )
        })
      }
      </View>
      <Text style={styles.cell}>Hometown: {hometown}</Text>
      <Text style={styles.cell}>Appearance: {appearance}</Text>
      <Text style={styles.cell}>Notes: {notes}</Text>
    </View>
  )

CharacterOverview.propTypes = {
  playerClass: React.PropTypes.object.isRequired,
  playerType: React.PropTypes.object.isRequired,
  stats: React.PropTypes.object.isRequired,
  substats: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired,
  gender: React.PropTypes.string,
  age: React.PropTypes.string,
  hometown: React.PropTypes.string,
  appearance: React.PropTypes.string,
  notes: React.PropTypes.string,
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cell: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
  }
})

module.exports = CharacterOverview
