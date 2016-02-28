import { createStore, combineReducers } from 'redux'
import {AsyncStorage} from 'react-native'
import { player } from './player.reducer'
import { step } from './step.reducer'

import {persistStore, autoRehydrate} from 'redux-persist'
// const store = createStore(reducer, null, autoRehydrate())
// persistStore(store)

const store = createStore(
  combineReducers({
    player,
    step,
  }),
  {
    player: undefined,
    step: undefined,
  },
  autoRehydrate()
)
persistStore(store, {storage: AsyncStorage})

module.exports = store
