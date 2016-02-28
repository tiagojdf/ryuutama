import {NEXT_STEP, PREVIOUS_STEP, GO_TO_STEP} from './step.actions'

export function step(state = 0, action) {
  switch (action.type) {
    case NEXT_STEP:
      return state + 1
    case PREVIOUS_STEP:
      return state - 1
    case GO_TO_STEP:
      return action.step
    default:
      return state
  }
}

// TODO function player whose state are all the player info
