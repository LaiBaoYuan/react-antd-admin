export const toggleCollapse = (data) => {
    return {type: 'TOGGLE_COLLAPSE',data};
};

const initState = {
    collapse: false
};

const reducer = (state = initState, action) => {
    const { type,data } = action
    switch (type) {
        case 'TOGGLE_COLLAPSE':
            return {...state, collapse: data};
        default:
            return state;
    }
};

export default {initState, reducer};
  