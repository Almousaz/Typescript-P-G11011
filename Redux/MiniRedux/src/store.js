import {createStore} from 'redux'
import  counterReducer  from './counterReducer'


let store = createStore(counterReducer)

export default store