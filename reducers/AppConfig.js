const initialStates = {
    users : undefined,
    isNew : true
}
const NEW_DATA = "NEW_DATA";
const DELETE = "DELETE";

export default DatasReducer = (state, action) => {
    switch(action.type) {
        case NEW_DATA:
            console.log("NEW: " + state.isNew)
            const result = {...state , isNew : !state.isNew}
            console.log("NEW " + result.isNew)
            return result;

        case DELETE:
            // fetch(`http://localhost:3000/api/user/${action.id}`,{
            //     method: "DELETE"
            // }).then(() => {
                return { ...state , isNew : true }
            // } )

    }
}

const middleware = (dispatch) => (action) => {
    switch(action.type) {
        case "DELETE" :
            fetch(`http://localhost:3000/api/user/${action.id}`,{
                method: "DELETE"
            }).then(() => dispatch({ type : "NEW"}))
            break;
        case "NEW":
            dispatch({type:"NEW"});
            break;
    }

}


