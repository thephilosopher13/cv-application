import Input from '../../input/Input';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSkillItemAction, removeItemAction } from './actions';

function SkillsAndToolsForm() {
    const [skill, setSkill] = useState('');
    const dispatch = useDispatch();

    const handleAddItem = (e) => {
      e.preventDefault();
      dispatch(addSkillItemAction(
        skill
      ));
      skillClearFields()
    };


    function skillClearFields() {
        setSkill('')
    }

    return (
        <form onSubmit={(e) => handleAddItem(e)}>
            <Input type='text' id='skills' labelName='Skill' value={skill} onChange={e => setSkill(e.target.value)} className='skill-input' data-key='skilll' required></Input>
            <button type='submit'></button>
        </form>
    )
}

export default function SkillsSection() {
    const [showForm, setShowForm] = useState(false);
    const skillsData = useSelector(state => state.skills.data);
    const dispatch = useDispatch();
    
    const toggleForm = () => {
      setShowForm(!showForm);
    };
  
    const handleRemoveItem = (itemId) => {
      dispatch(removeItemAction(itemId));
    };


    return (
        <div id='skills-div'>
          <h2>Skills and Tools:</h2>
          {(skillsData.data).map((skillItem) => (
            <div key={skillItem.id} className="skill-item">
              <h3>{skillItem}</h3>
              <button onClick={() => handleRemoveItem(skillItem.id)}>Delete</button>
            </div>
          ))}
          <button onClick={toggleForm}>
            {showForm ? 'Hide Form' : 'Show Form'}
          </button>
          {showForm && <SkillsAndToolsForm />}
        </div>
      );
}