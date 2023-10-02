import Input from '../input/Input';
import SubmitExperience from '../input/SubmitExperience'
import { useState } from 'react';
import { Experience } from '../data/Experience'

function ExperienceSectionForm() {
    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [experienceStartDate, setExperienceStartDate] = useState('');
    const [experienceEndDate, setExperienceEndDate] = useState('');
    const [experienceLocation, setExperienceLocation] = useState('');
    const [description, setDescription] = useState('');

    function experienceClearFields() {
        setCompanyName('')
        setPosition('')
        setExperienceStartDate('')
        setExperienceEndDate('')
        setExperienceLocation('')
        setDescription('')
    }

    return (
        <form onSubmit={(e) => {
            SubmitExperience(
                e,
                {
                    companyName,
                    position,
                    experienceStartDate,
                    experienceEndDate,
                    experienceLocation,
                    description
                },
                () => experienceClearFields(),
            );
        }}>
            <Input type='text' id='experience-company-name' labelName="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} className="experience-input" data-key='experience-company-name'></Input>
            <Input type='text' id='experience-position' labelName="Position:" value={position} onChange={e => setPosition(e.target.value)} className="experience-input" data-key='experience-position'></Input>
            <Input type='date' id='experience-start-date' labelName="Start Date" value={experienceStartDate} onChange={e => setExperienceStartDate(e.target.value)} className="experience-input" data-key='experience-start-date'></Input>
            <Input type='date' id='experience-end-date' labelName="End Date" value={experienceEndDate} onChange={e => setExperienceEndDate(e.target.value)} className="experience-input" data-key='experience-end-date'></Input>
            <Input type='text' id='experience-location' labelName="Location" value={experienceLocation} onChange={e => setExperienceLocation(e.target.value)} className="experience-input" data-key='experience-location'></Input>
            <Input type='text' id='experience-description' labelName="Description:" value={description} onChange={e => setDescription(e.target.value)} className="experience-input" data-key='experience-description'></Input>
            <button type='submit'></button>
       </form>
    )
}

export default function ExperienceSection() {

    const [showForm, setShowForm] = useState(false);
    const [experienceData, setExperienceData] = useState(Experience.data);
    
    const toggleForm = () => {
      setShowForm(!showForm);
    };
  
    const handleDelete = (index) => {
      const newData = [...Experience.data];
      newData.splice(index, 1);
      setExperienceData(newData);
      Experience.updateData(newData);
    };
  
    return (
      <div id='experience-div'>
        <h2>Experience Details</h2>
        {(Experience.data).map((experienceItem, index) => (
          <div key={index} className="experience-item">
            <h3>{experienceItem.companyName}</h3>
            <p>Position: {experienceItem.position}</p>
            <p>{experienceItem.experienceStartDate} - {experienceItem.experienceEndDate}</p>
            <button onClick={() => handleDelete(index)}>X</button>
          </div>
        ))}
        <button onClick={toggleForm}>
          {showForm ? 'Hide Form' : 'Show Form'}
        </button>
        {showForm && <ExperienceSectionForm />}
      </div>
    );
  }
  