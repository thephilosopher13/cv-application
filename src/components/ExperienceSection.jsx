import Input from './input/Input';
import Useinput  from './input/Useinput'
import SubmitExperience from './input/SubmitExperience'
import { useState } from 'react';
import { Experience } from './data/Experience'

function ExperienceSectionForm() {
    const [companyName, setCompanyName] = Useinput('')
    const [position, setPosition] = Useinput('')
    const [experienceStartDate, setExperienceStartDate] = Useinput('');
    const [experienceEndDate, setExperienceEndDate] = Useinput('');
    const [experienceLocation, setExperienceLocation] = Useinput('');
    const [description, setDescription] = Useinput('')

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
            <Input type='text' id='experience-company-name' labelName="Company Name" value={companyName} onChange={setCompanyName} className="experience-input" data-key='experience-company-name'></Input>
            <Input type='text' id='experience-position' labelName="Position:" value={position} onChange={setPosition} className="experience-input" data-key='experience-position'></Input>
            <Input type='date' id='experience-start-date' labelName="Start Date" value={experienceStartDate} onChange={setExperienceStartDate} className="experience-input" data-key='experience-start-date'></Input>
            <Input type='date' id='experience-end-date' labelName="End Date" value={experienceEndDate} onChange={setExperienceEndDate} className="experience-input" data-key='experience-end-date'></Input>
            <Input type='text' id='experience-location' labelName="Location" value={experienceLocation} onChange={setExperienceLocation} className="experience-input" data-key='experience-location'></Input>
            <Input type='text' id='experience-description' labelName="Description:" value={description} onChange={setDescription} className="experience-input" data-key='experience-description'></Input>
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
      Experience.updateExperienceData(newData);
    };
  
    const updateExperienceData = () => {
      setExperienceData(Experience.data);
    };
  
    return (
      <div id='education-div'>
        <h2>Experience Details</h2>
        {(Experience.data).map((experienceItem, index) => (
          <div key={index} className="experience-item">
            <h3>{experienceItem.companyName}</h3>
            <p>Position: {experienceItem.position}</p>
            <p>{experienceItem.experienceStartDate} - {experienceItem.experienceEndDate}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
        <button onClick={toggleForm}>
          {showForm ? 'Hide Form' : 'Show Form'}
        </button>
        {showForm && <ExperienceSectionForm />}
      </div>
    );
  }
  