import { createStore } from 'redux';
import counter from './reducers/app';

export const Store = createStore(counter);