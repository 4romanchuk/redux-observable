export const rootReducer = (state = { isLoading: false }, action) => {
    console.log(action)

    switch (action.type) {
        case 'FETCH_USER':
            return {
                isLoading: true
            };

        case 'FETCH_USER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                [action.payload.id]: action.payload
            };

        case 'FETCH_USER_CANCELLED':
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;
        }
}