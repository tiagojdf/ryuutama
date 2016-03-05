import React, {
  View,
  Text,
  TextInput
} from 'react-native'

var _ = require('lodash')

var Input = ({tag, text, changeText}) => {
    return (
          <View>
            <Text>{_.capitalize(tag)}:</Text>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(newText) => changeText(newText)}
                value={text}
              />
          </View>
    )
  }


Input.propTypes = {
  tag: React.PropTypes.string,
  text: React.PropTypes.any,
  changeText: React.PropTypes.func.isRequired,
}

module.exports = Input
