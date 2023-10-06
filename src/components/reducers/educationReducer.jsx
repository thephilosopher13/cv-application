import { ADD_EDUCATION_ITEM, REMOVE_ITEM } from '../actions/actionTypes'

const education = {
    data: []
}

const educationReducer = (state = education, action) => {
    switch (action.type) {
      case ADD_EDUCATION_ITEM:
        const { school, degree, startDate, endDate, location } = action.payload;
        return {
          ...state,
          data: [...state.data, action.payload], 
        };
        case REMOVE_ITEM:
          return {
            ...state,
            data: state.data.filter(item => item.id !== action.payload.itemId), 
          };
      default:
        return state;
    }
  };

export default educationReducer