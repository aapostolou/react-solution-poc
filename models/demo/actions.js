import { namespacedActionCreators } from '../lib'

const namespace = 'demo'

const { actionCreator, effectActionCreator } =
  namespacedActionCreators(namespace)

export const changeLanguage = actionCreator('CHANGE LANGUAGE')

export const fetchBasicData = effectActionCreator('FETCH BASIC DATA')
