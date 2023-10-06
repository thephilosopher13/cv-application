import { ADD_EXPERIENCE_ITEM, REMOVE_ITEM } from '../actions/actionTypes'

const experience = {
    data: []
}

const experienceReducer = (state = experience, action) => {
    switch (action.type) {
        case ADD_EXPERIENCE_ITEM:
          const { companyName, position, experienceStartDate, experienceEndDate, experienceLocation, description } = action.payload
          return {
            ...state,
            data: [...state.data, action.payload], 
          };
        case REMOVE_ITEM:
          return {
            ...state,
            data: state.data.filter(item => item.id !== action.itemId), 
          };
        default:
          return state;
      }
}

export default experienceReducer