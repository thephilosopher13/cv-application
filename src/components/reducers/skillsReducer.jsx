import { ADD_SKILL_ITEM, REMOVE_ITEM } from '../actions/actionTypes'

const skills = {
    data: []
}

const skillsReducer = (state = skills, action) => {
    switch (action.type) {
        case ADD_SKILL_ITEM:
          const { skill } = action.payload
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
}

export default skillsReducer