import { Experience } from '../data/Experience';

export default function SubmitExperience(e, newObject, clearerFunction) {
    e.preventDefault();
  
    // Check if newObject is an object
    if (typeof newObject === 'object' && newObject !== null) {
      Experience.updateData([...Experience.data, newObject]);
    } 
    clearerFunction()
  
  }