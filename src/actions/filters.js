export const sortByTitle = () => {
    return {
        type: 'SORT_BY_TITLE'
    };
};

export const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    };
;}