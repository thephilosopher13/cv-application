import { ADD_PERSONAL_INFO_ITEM } from "../actions/actionTypes";

const personalInfo = {
    fullname: null,
    email: null,
    address: null,
    number: null,
}

const personalInfoReducer = (state = personalInfo, action) => {
    switch (action.type) {
        case ADD_PERSONAL_INFO_ITEM:
          // Handle the ADD_ITEM action by adding an item to the data array
          return {
            ...state,
            data: action.payload, // Replace `newItem` with the data you want to add
          };
        default:
          return state;
      }
}

export default personalInfoReducer