/*
** Action types for plqyer
*/
export const SELECT_CLASS = 'SELECT_CLASS'
export const SELECT_TYPE = 'SELECT_TYPE'
export const UPDATE_STATS = 'UPDATE_STATS'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_GENDER = 'UPDATE_GENDER'
export const UPDATE_AGE = 'UPDATE_AGE'
export const UPDATE_APPEARANCE = 'UPDATE_APPEARANCE'
export const UPDATE_HOMETOWN = 'UPDATE_HOMETOWN'
export const UPDATE_NOTES = 'UPDATE_NOTES'

export function selectClass(playerClass) {
  return {
    type: SELECT_CLASS,
    playerClass,
  }
}

export function selectType(playerType) {
  return {
    type: SELECT_TYPE,
    playerType,
  }
}

export function updateStats(stats) {
  return {
    type: UPDATE_STATS,
    stats,
  }
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    name,
  }
}

export function updateGender(gender) {
  return {
    type: UPDATE_GENDER,
    gender,
  }
}

export function updateAge(age) {
  return {
    type: UPDATE_AGE,
    age,
  }
}

export function updateAppearance(appearance) {
  return {
    type: UPDATE_APPEARANCE,
    appearance,
  }
}

export function updateHometown(hometown) {
  return {
    type: UPDATE_HOMETOWN,
    hometown,
  }
}

export function updateNotes(notes) {
  return {
    type: UPDATE_NOTES,
    notes,
  }
}
