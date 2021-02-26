import {useReducer} from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case "NEW":
            return {...state , new : false}
        case "DELETE":
            fetch(`http://localhost:3000/api/user/${action.id}`,{
                method: "DELETE"
            }).then(() => {
                return { ...state , new : true }
            } )

    }
}
const initialStates = {
    users : undefined,
    new : true
}

const AppConfig = () => {

    const [state, dispatch] = useReducer(reducer, initialStates)
    return [state, dispatch];
}

export default AppConfig
