import Input from '../../input/Input';
import Useinput  from '../../input/Useinput'
import SubmitSkill from '../../input/SubmitSkill'
import { useState } from 'react';
import { Skills } from '../data/Skills';

function SkillsAndToolsForm() {
    const [skill, setSkill] = Useinput('')

    function skillClearFields() {
        setSkill('')
    }

    return (
        <form onSubmit={(e) => { SubmitSkill(e, skill, () => skillClearFields())}}>
            <Input type='text' id='skills' labelName='Skill' value={skill} onChange={setSkill} className='skill-input' data-key='skilll' required></Input>
            <button type='submit'></button>
        </form>
    )
}

export default function SkillsSection() {
    const [showForm, setShowForm] = useState(false);
    const [skillsData, setSkillsData] = useState(Skills.data);
    
    const toggleForm = () => {
      setShowForm(!showForm);
    };
  
    const handleDelete = (index) => {
      const newData = [...Skills.data];
      newData.splice(index, 1);
      setSkillsData(newData);
      Skills.updateData(newData);
    };

    return (
        <div id='skills-div'>
          <h2>Skill Details</h2>
          {(Skills.data).map((skillItem, index) => (
            <div key={index} className="skill-item">
              <h3>{skillItem}</h3>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
          <button onClick={toggleForm}>
            {showForm ? 'Hide Form' : 'Show Form'}
          </button>
          {showForm && <SkillsAndToolsForm />}
        </div>
      );
}