/*
** Action types for plqyer
*/
export const SELECT_CLASS = 'SELECT_CLASS'
export const SELECT_TYPE = 'SELECT_TYPE'

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
