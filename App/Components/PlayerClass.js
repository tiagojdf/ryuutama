import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});


class PlayerClass extends Component {
  _onPress() {
    this.props.selectClass(this.props.playerClass);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.playerClass.name}</Text>
        <Text>{this.props.playerClass.description}</Text>
        {this.props.playerClass.skills.map( (skill) => {
          return (
            <Text key={skill}>{skill}</Text>
          );
        })}
        <TouchableHighlight onPress={this._onPress.bind(this)}>
          <Text>Select</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


module.exports = PlayerClass;
