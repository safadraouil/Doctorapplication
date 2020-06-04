import Doctor from '../pages/Doctor'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reducer from './Reducer'

function Index() {
  const INITIAL_STATE = {
    counter: [],
  }
  const store = createStore(
    Reducer,
    INITIAL_STATE,
    compose(
      applyMiddleware(thunk),
      typeof window === 'object' && window.devToolsExtension
        ? window.devToolsExtension()
        : f => f
    )
  )
  return (
    <Provider store={store}>
      <Doctor />
    </Provider>
  )
}

export default Index
