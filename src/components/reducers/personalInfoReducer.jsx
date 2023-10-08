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
          const { fullname, email, address, number } = action.payload
          return {
            ...state,
            fullname: fullname,
            email: email,
            address: address,
            number: number,
          };
        default:
          return state;
      }
}

export default personalInfoReducer