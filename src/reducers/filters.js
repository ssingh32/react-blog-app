const filtersReducerDefaultState = {
    text: '',
    sortBy: 'title'
};

export default (state= filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SORT_BY_TITLE':
            return {...state, sortBy: 'title'};
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text};
        default:
            return state;
    };
};