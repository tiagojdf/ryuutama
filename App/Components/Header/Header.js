import React, {
  Text,
  View
} from 'react-native'

import styles from './Header.styles'

const Header = ({title}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
}

module.exports = Header
