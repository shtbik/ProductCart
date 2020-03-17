import coreConfig from 'configs/core'
import configureStore from './configureStore'

const persistedState = localStorage.getItem(coreConfig.localStorage.name)
	? JSON.parse(localStorage.getItem(coreConfig.localStorage.name))
	: []
const store = configureStore({ cart: persistedState.cart || [] })

export default store
