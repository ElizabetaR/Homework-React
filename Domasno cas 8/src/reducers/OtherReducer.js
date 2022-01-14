const initialState = {
    green: "Initial Value",
    secondgreen: ""
}


const OtherReducer = (state = initialState, action) => {

    switch (action.type) {
        case "NEW_RECIPE":
            return {
                ...state,
                green: action.payload
            }
        case "FINAL_RECIPE":
            return {
                ...state,
                secondgreen: action.payload
            }


        default: return state;
    }

}


export default OtherReducer;