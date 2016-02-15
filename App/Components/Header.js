import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {colors} from '../Config/styleVariables';


var styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#104028'
  },
  title: {
    fontSize: 25,
    textAlign: colors.primary,
    color: colors.accent
  },
});


class Header extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Ryuutama</Text>
      </View>
    )
  }
};


module.exports = Header;
