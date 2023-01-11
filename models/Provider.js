import React from 'react'

import { Provider } from 'react-redux'

import { createEpicMiddleware } from 'redux-observable'

import { configStore } from './lib'

import { rootReducer, rootEpics, initialState } from './config'

const epicMiddleware = createEpicMiddleware()

const middlewares = [epicMiddleware]
const store = configStore(rootReducer, initialState, middlewares)

// Start the middleware
epicMiddleware.run(rootEpics)

const CustomProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default CustomProvider
