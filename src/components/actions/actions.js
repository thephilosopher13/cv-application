import { ADD_EDUCATION_ITEM, ADD_EXPERIENCE_ITEM, ADD_SKILL_ITEM, ADD_PERSONAL_INFO_ITEM, REMOVE_ITEM } from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

export const addEducationItemAction = ({ school, degree, startDate, endDate, location }) => ({
    type: ADD_EDUCATION_ITEM
    payload: {
        id: uuidv4(), // Generate a random UUID as the item's ID
        school,
        degree,
        startDate, 
        endDate, 
        location 
      },
})

export const addExperienceItemAction = ({ companyName, position, experienceStartDate, experienceEndDate, experienceLocation, description }) => ({
    type: ADD_EXPERIENCE_ITEM,
    payload: {
      id: uuidv4(),
      companyName,
      position,
      experienceStartDate,
      experienceEndDate,
      experienceLocation,
      description
    },
  });

export const addSkillItemAction = ({ skill }) => ({
    type: ADD_SKILL_ITEM,
    payload: {
        id: uuidv4(),
        skill
    }
})

export const addPersonalInfoItemAction = ({ fullname, email, address, number }) => ({
    type: ADD_PERSONAL_INFO_ITEM
    payload: {
        fullname,
        email,
        address,
        number
    }
})

export const removeItemAction = (itemId) => ({
    type: REMOVE_ITEM,
    payload: {
      itemId, // Pass the ID of the item you want to remove as the payload
    },
  });