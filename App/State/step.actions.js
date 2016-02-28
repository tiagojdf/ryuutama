/*
** Action types for step
*/
export const NEXT_STEP = 'NEXT_STEP'
export const PREVIOUS_STEP = 'PREVIOUS_STEP'
export const GO_TO_STEP = 'GO_TO_STEP'

export function nextStep() {
  return {
    type: NEXT_STEP,
  }
}

export function previousStep() {
  return {
    type: PREVIOUS_STEP,
  }
}

export function goToStep(step) {
  return {
    type: GO_TO_STEP,
    step
  }
}
