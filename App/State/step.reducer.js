import {NEXT_STEP, PREVIOUS_STEP} from './step.actions'

export function step(state = 0, action) {
  switch (action.type) {
    case NEXT_STEP:
      return state + 1
    case PREVIOUS_STEP:
      return state - 1
    default:
      return state
  }
}

// TODO function player whose state are all the player info
