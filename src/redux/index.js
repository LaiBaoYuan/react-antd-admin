import { legacy_createStore as createStore, combineReducers, applyMiddleware} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const initState = {}, reducer = {}

const files = require.context('./', false, /\.js$/);
files.keys().forEach(key => {
  if(key === './index.js') return
  let name = key.replace('./','').replace('.js','')
  initState[name] = files(key).default.initState
  reducer[name] = files(key).default.reducer
})

export default createStore(
  combineReducers(reducer),
  initState,
  applyMiddleware(thunk)
)