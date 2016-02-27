/*
** Action types for plqyer
*/
export const SELECT_CLASS = 'SELECT_CLASS'

export function selectClass(playerClass) {
  return {
    type: SELECT_CLASS,
    playerClass
  }
}
