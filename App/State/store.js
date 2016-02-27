import { createStore, combineReducers } from 'redux'
import { player } from './player.reducer'
import { step } from './step.reducer'

export const store = createStore(
  combineReducers({
    player,
    step,
  })
)
