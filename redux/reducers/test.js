import {useReducer} from 'react';

const reducer = (state, action) => {
    if(action.type){
      return {...state, newData : false}
    }
    return {...state, newData : true}
  }

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, { newData: true})

    return [state, dispatch]
}

export default Reducer