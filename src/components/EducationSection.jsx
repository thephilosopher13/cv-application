import Input from './input/Input';
import Useinput  from './input/Useinput'
import SubmitEducation from './input/SubmitEducation'
import { useState } from 'react';
import { Education } from './data/Education';


function EducationDetailsForm() {
    const [school, setSchool] = Useinput('');
    const [degree, setDegree] = Useinput('');
    const [startDate, setStartDate] = Useinput('');
    const [endDate, setEndDate] = Useinput('');
    const [location, setLocation] = Useinput('');

    function educationClearFields() {
      setSchool('')
      setDegree('')
      setStartDate('')
      setEndDate('')
      setLocation('')
    }

    return (
        <form onSubmit={(e) => {
          SubmitEducation(
            e, 
            {
              school,
              degree,
              startDate,
              endDate,
              location,
            },
            () => educationClearFields(),
          );
        }}>
            <Input type='text' id='education-school-name' labelName="School Attended" value={school} onChange={setSchool} className='education-input' data-key='education-school' required></Input>
            <Input type='text' id='education-degree' labelName="Degree" value={degree} onChange={setDegree} className='education-input' data-key='education-degree' required></Input>
            <Input type='date' id='education-date-started' labelName="Date Started" value={startDate} onChange={setStartDate} className='education-input' data-key='education-start-date' required></Input>
            <Input type='date' id='education-dateonUpdateEducationData={updateEducationData} -ended' labelName="Date Ended" value={endDate} onChange={setEndDate} className='education-input' data-key='education-end-date' required></Input>
            <Input type='text' id='education-location' labelName="Location" value={location} onChange={setLocation} className='education-input' data-key='education-location' required></Input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default function EducationSection() {

  const [showForm, setShowForm] = useState(false);
  const [educationData, setEducationData] = useState(Education.data);
  
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleDelete = (index) => {
    const newData = [...Education.data];
    newData.splice(index, 1);
    setEducationData(newData);
    Education.updateEducationData(newData);
  };

  const updateEducationData = () => {
    setEducationData(Education.data);
  };

  return (
    <div id='education-div'>
      <h2>Educational Details</h2>
      {(Education.data).map((educationItem, index) => (
        <div key={index} className="education-item">
          <h3>{educationItem.school}</h3>
          <p>Degree: {educationItem.degree}</p>
          <p>{educationItem.startDate} - {educationItem.endDate}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <button onClick={toggleForm}>
        {showForm ? 'Hide Form' : 'Show Form'}
      </button>
      {showForm && <EducationDetailsForm />}
    </div>
  );
}
