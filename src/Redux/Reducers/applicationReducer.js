const initialState = {
    // currentArticle: null,
    userApplications: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_USER_APPLICATIONS":
            return {
                ...state,
                applications: action.payload
            };
            
        default:
            return state;
    }
}