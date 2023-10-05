import Input from '../input/Input';
import { useSelector, useDispatch } from 'react-redux';
import { addEducationItemAction, removeItemAction } from './actions';
import { useState } from 'react';

function EducationDetailsForm() {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');
    const dispatch = useDispatch();

    const handleAddItem = (e) => {
      e.preventDefault();
      dispatch(addEducationItemAction(
        school,
        degree,
        startDate,
        endDate,
        location,
      ));
      educationClearFields()
    };

  

    function educationClearFields() {
      setSchool('')
      setDegree('')
      setStartDate('')
      setEndDate('')
      setLocation('')
    }

    return (
        <form onSubmit={(e) => handleAddItem(e)}>
            <Input type='text' id='education-school-name' labelName="School Attended" value={school} onChange={e => setSchool(e.target.value)} className='education-input' data-key='education-school' required></Input>
            <Input type='text' id='education-degree' labelName="Degree" value={degree} onChange={e => setDegree(e.target.value)} className='education-input' data-key='education-degree' required></Input>
            <Input type='date' id='education-date-started' labelName="Date Started" value={startDate} onChange={e => setStartDate(e.target.value)} className='education-input' data-key='education-start-date' required></Input>
            <Input type='date' id='education-date-ended' labelName="Date Ended" value={endDate} onChange={e => setEndDate(e.target.value)} className='education-input' data-key='education-end-date' required></Input>
            <Input type='text' id='education-location' labelName="Location" value={location} onChange={e => setLocation(e.target.value)} className='education-input' data-key='education-location' required></Input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default function EducationSection() {

  const [showForm, setShowForm] = useState(false);
  const educationData = useSelector(state => state.education.data);
  const dispatch = useDispatch();


  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemAction(itemId));
  };

  return (
    <div id='education-div'>
      <h2>Educational Details</h2>
      {(educationData.data).map((educationItem) => (
        <div key={educationItem.id} className="education-item">
          <h3>{educationItem.school}</h3>
          <p>Degree: {educationItem.degree}</p>
          <p>{educationItem.startDate} - {educationItem.endDate}</p>
          <button onClick={() => handleRemoveItem(educationItem.id)}>Delete</button>
        </div>
      ))}
      <button onClick={toggleForm}>
        {showForm ? 'Hide Form' : 'Show Form'}
      </button>
      {showForm && <EducationDetailsForm />}
    </div>
  );
}
