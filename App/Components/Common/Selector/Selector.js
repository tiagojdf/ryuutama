import React, {
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native'

import styles from './Selector.styles'

var _ = require('lodash')

const Selector = ({data, select }) => (
  <View style={styles.container}>
    {
       data.image ?
        <Image
          style={styles.image}
          source={data.image}
          />
        : null
    }
    <Text style={styles.name}>{_.capitalize(data.name)}</Text>
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
