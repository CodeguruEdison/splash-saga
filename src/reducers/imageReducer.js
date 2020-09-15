import { IMAGES } from '../constants';

export const imageReducer = (state = [], action) => {
    switch (action.type) {
        case IMAGES.LOAD_SUCCESS:
            return [...state, ...action.images];
        default:
            return state;
    }
};
export default imageReducer;
