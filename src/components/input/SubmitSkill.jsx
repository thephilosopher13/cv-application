import { Skills } from '../data/Skills';

export default function SubmitSkill(e, newSkill, clearerFunction) {
    e.preventDefault();
  
    Skills.updateData([...Skills.data, newSkill]);
    
    clearerFunction()
  }