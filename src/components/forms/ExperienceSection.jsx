import Input from '../input/Input';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExperienceItemAction, removeItemAction } from '../actions/actions';

function ExperienceSectionForm() {
    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [experienceStartDate, setExperienceStartDate] = useState('');
    const [experienceEndDate, setExperienceEndDate] = useState('');
    const [experienceLocation, setExperienceLocation] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleAddItem = (e) => {
      e.preventDefault();
      dispatch(addExperienceItemAction({
        companyName: companyName,
        position: position,
        experienceStartDate: experienceStartDate,
        experienceEndDate: experienceEndDate,
        experienceLocation: experienceLocation,
        description: description
      }));
      experienceClearFields()
    };

    function experienceClearFields() {
        setCompanyName('')
        setPosition('')
        setExperienceStartDate('')
        setExperienceEndDate('')
        setExperienceLocation('')
        setDescription('')
    }

    return (
      <form onSubmit={(e) => handleAddItem(e)}>
            <Input type='text' id='experience-company-name' labelName="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} className="experience-input" data-key='experience-company-name'></Input>
            <Input type='text' id='experience-position' labelName="Position:" value={position} onChange={e => setPosition(e.target.value)} className="experience-input" data-key='experience-position'></Input>
            <Input type='date' id='experience-start-date' labelName="Start Date" value={experienceStartDate} onChange={e => setExperienceStartDate(e.target.value)} className="experience-input" data-key='experience-start-date'></Input>
            <Input type='date' id='experience-end-date' labelName="End Date" value={experienceEndDate} onChange={e => setExperienceEndDate(e.target.value)} className="experience-input" data-key='experience-end-date'></Input>
            <Input type='text' id='experience-location' labelName="Location" value={experienceLocation} onChange={e => setExperienceLocation(e.target.value)} className="experience-input" data-key='experience-location'></Input>
            <Input type='text' id='experience-description' labelName="Description:" value={description} onChange={e => setDescription(e.target.value)} className="experience-input" data-key='experience-description'></Input>
            <button type='submit'>Submit</button>
       </form>
    )
}

export default function ExperienceSection() {

    const [showForm, setShowForm] = useState(false);
    const experienceData = useSelector(state => state.experience.data);
    const dispatch = useDispatch();
    
    const toggleForm = () => {
      setShowForm(!showForm);
    };

    const handleRemoveItem = (itemId) => {
      dispatch(removeItemAction(itemId));
    };

    
  
    return (
      <div id='experience-div'>
        <h2>Experience Details</h2>
        {(experienceData).map((experienceItem) => (
          <div key={experienceItem.id} className="experience-item">
            <h3>{experienceItem.companyName}</h3>
            <p>Position: {experienceItem.position}</p>
            <p>{experienceItem.experienceStartDate} - {experienceItem.experienceEndDate}</p>
            <button onClick={() => handleRemoveItem(experienceItem.id)}>X</button>
          </div>
        ))}
        <button onClick={toggleForm}>
          {showForm ? 'Hide Form' : 'Show Form'}
        </button>
        {showForm && <ExperienceSectionForm />}
      </div>
    );
  }
  