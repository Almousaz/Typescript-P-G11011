let initialState = {
    counter: 0,
};

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, counter: state.counter + 1 };

        case 'DECREASE':
            return { ...state, counter: state.counter - 1 };

        default:
            return state;
    }
}
