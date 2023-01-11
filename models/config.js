import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

import { reducer as demoReducer, epics as demoEpics } from './demo'

export const rootReducer = combineReducers({
  demo: demoReducer,
})

export const rootEpics = combineEpics(demoEpics)

export const initialState = {}
