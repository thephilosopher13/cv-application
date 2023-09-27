import { Education } from '../data/Education';

export default function SubmitEducation(e, newObject, clearerFunction) {
    e.preventDefault();
  
    // Check if newObject is an object
    if (typeof newObject === 'object' && newObject !== null) {
      Education.updateData([...Education.data, newObject]);
    } 
    clearerFunction()
  
  }