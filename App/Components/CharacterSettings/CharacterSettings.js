import React, {
  View,
  Text,
  TouchableHighlight,
} from 'react-native'

import InputContainer from '../Common/Input/InputContainer'

import { connect } from 'react-redux'
import {nextStep} from '../../State/step.actions'
import {
  updateName,
  updateGender,
  updateAge,
  updateHometown,
  updateAppearance,
  updateNotes,
} from '../../State/player.actions'

var CharacterSettings = ({dispatch}) => {
    return (
      <View>
          <View>
            <InputContainer onPress={updateName} tag={'name'}/>
            <InputContainer onPress={updateGender} tag={'gender'}/>
            <InputContainer onPress={updateAge} tag={'age'}/>
            <InputContainer onPress={updateHometown} tag={'hometown'}/>
            <InputContainer onPress={updateAppearance} tag={'appearance'}/>
            <InputContainer onPress={updateNotes} tag={'notes'}/>
          </View>
      <TouchableHighlight onPress={() => dispatch(nextStep())}>
        <Text> Select </Text>
      </TouchableHighlight>
      </View>
    )
  }


CharacterSettings.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
}
CharacterSettings = connect()(CharacterSettings)

module.exports = CharacterSettings
