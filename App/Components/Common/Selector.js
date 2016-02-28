import React, {
  View,
  Text,
  TouchableHighlight
} from 'react-native'

import styles from './Selector.styles'

const Selector = ({data, select }) => (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.skills}>
        {data.skills.map( (skill) => {
          return (
            <Text key={skill} style={styles.skill}>*{skill} </Text>
          )
        })}
      </View>
      <View style={styles.select}>
        <TouchableHighlight onPress={() => (
          select(data)
        )}>
          <Text style={styles.selectText}>Select</Text>
        </TouchableHighlight>
      </View>
    </View>
  )

Selector.propTypes = {
  select: React.PropTypes.func.isRequired,
  data: React.PropTypes.shape({
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    skills: React.PropTypes.array,
  }),
}

module.exports = Selector
