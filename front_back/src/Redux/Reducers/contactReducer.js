import { GET_PERSONS } from "../Constants/personTypes";


const initState={
    persons:[]
}

const contactReducer=(state=initState,action)=>{
    switch (action.type) {
        case GET_PERSONS:
            return {...state,persons:action.payload}
        default:
            return state
    }
}


export default contactReducer