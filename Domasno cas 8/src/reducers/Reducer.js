const initialState = {
    sweet: "Initial Value",
    secondsweet: ""
}


const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case "MAKE_RECIPE":
            return {
                ...state,
                sweet: action.payload
            }
        case "OTHER_RECIPE":
            return {
                ...state,
                secondsweet: action.payload
            }

        default: return state;
    }

}


export default Reducer;