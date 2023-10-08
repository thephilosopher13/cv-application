import Input from '../input/Input';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSkillItemAction, removeItemAction } from '../actions/actions';

function SkillsAndToolsForm() {
    const [skill, setSkill] = useState('');
    const dispatch = useDispatch();

    const handleAddItem = (e) => {
      e.preventDefault();
      dispatch(addSkillItemAction({ skill: skill }));
      skillClearFields()
    };


    function skillClearFields() {
        setSkill('')
    }

    return (
        <form onSubmit={(e) => handleAddItem(e)} className='flex flex-col gap-2 mt-2'>
            <Input type='text' id='skills' labelName='Skill' value={skill} onChange={e => setSkill(e.target.value)} data-key='skilll' required></Input>
            <button type='submit' class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4">Submit</button>
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
        <div id='skills-div' className='flex flex-col gap-2 mt-2'>
          <h2 className='text-2xl'>Skills and Tools:</h2>
          {(skillsData).map((skillItem) => (
            <div key={skillItem.id} className="skill-item">
              <h3>{skillItem.skill}</h3>
              <button onClick={() => handleRemoveItem(skillItem.id)}>Delete</button>
            </div>
          ))}
          <button onClick={toggleForm} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            {showForm ? 'Hide Form' : 'Show Form'}
          </button>
          {showForm && <SkillsAndToolsForm />}
        </div>
      );
}