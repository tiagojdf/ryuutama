import React, {
  Text,
  View
} from 'react-native'

var I18n = require('react-native-i18n')
import styles from './Header.styles'

const Header = ({title}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{I18n.t('title')}</Text>
  </View>
)

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
}

I18n.fallbacks = true

I18n.translations = {
  en: {
    title: 'Ryuutama'
  }
}

module.exports = Header
