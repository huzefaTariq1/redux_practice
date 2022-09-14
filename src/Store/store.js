import { createStore } from 'redux';

import CounterReducer from '../Reducer/counterReducer';

const store=createStore(CounterReducer)

export default store;

