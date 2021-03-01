import { createStore } from "redux";
import {createWrapper} from 'next-redux-wrapper';
import dataReducer from './reducers/dataReducer';

const makeStore = context => createStore(dataReducer);

export const wrapper = createWrapper(makeStore, {debug: true})