import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styleVariables from '../Config/styleVariables';


var styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: styleVariables.colors.primary
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: styleVariables.colors.accent
  },
});


class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ryuutama</Text>
      </View>
    );
  }
}


module.exports = Header;
