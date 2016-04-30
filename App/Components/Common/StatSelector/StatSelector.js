import React, {
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native'

import styles from './StatSelector.styles'

const StatSelector = ({stat, value, increase, decrease, image}) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={increase}>
      <View style={[styles.button, styles.leftButton]}>
        <Text style={styles.text}>+</Text>
      </View>
    </TouchableHighlight>
    <View style={styles.stat}>
      {
        image ?
        <Image
        style={styles.image}
        source={image}
        />
        : null
      }
      <Text style={styles.text}>{stat}: {value}</Text>
    </View>
    <TouchableHighlight onPress={decrease}>
      <View style={[styles.button, styles.rightButton]}>
        <Text style={styles.text}>-</Text>
      </View>
    </TouchableHighlight>
  </View>
)

StatSelector.propTypes = {
  stat: React.PropTypes.string,
  value: React.PropTypes.number,
  increase: React.PropTypes.func,
  decrease: React.PropTypes.func,
  image: React.PropTypes.string
}

module.exports = StatSelector
