import * as t from '../types';


const dataReducer = (state = {
    userInfo: {
        name: "guest"
    }, 
}, action) => {
    switch(action.type)
    {
        case t.NEW_DATA :
            return {...state, name : "Flo"}
        default:
            return state;
    }
}
export default dataReducer;