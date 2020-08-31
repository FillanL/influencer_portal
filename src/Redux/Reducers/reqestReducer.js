const initialState = {
    // currentArticle: null,
    requests: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_ALL_REQUEST":
            return {
                ...state,
                requests: action.payload
            }
        case "GET_USER_REQUESTS":
            return {
                ...state,
                userRequests: action.payload
            };
            
        default:
            return state;
    }
}