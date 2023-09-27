import { PersonalInfo } from "../data/PersonalInfo";

export default function SubmitPersonalInfo(e, newName, newEmail, newAddress, newNumber, clearerFunction) {
    e.preventDefault();
  
    PersonalInfo.updateData(newName, newEmail, newAddress, newNumber);
    clearerFunction()
  
  }