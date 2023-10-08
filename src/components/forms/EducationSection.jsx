import Input from '../input/Input';
import { useSelector, useDispatch } from 'react-redux';
import { addEducationItemAction, removeItemAction } from '../actions/actions';
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
      dispatch(addEducationItemAction({
        school: school,
        degree: degree,
        startDate: startDate,
        endDate: endDate,
        location: location,
      }));
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
        <form onSubmit={(e) => handleAddItem(e)} className='flex flex-col gap-2 mt-4'>
            <Input type='text' id='education-school-name' labelName="School Attended" value={school} onChange={e => setSchool(e.target.value)}  data-key='education-school'  required></Input>
            <Input type='text' id='education-degree' labelName="Degree" value={degree} onChange={e => setDegree(e.target.value)}  data-key='education-degree'  required></Input>
            <Input type='date' id='education-date-started' labelName="Date Started" value={startDate} onChange={e => setStartDate(e.target.value)}  data-key='education-start-date'  required></Input>
            <Input type='date' id='education-date-ended' labelName="Date Ended" value={endDate} onChange={e => setEndDate(e.target.value)}  data-key='education-end-date' required></Input>
            <Input type='text' id='education-location' labelName="Location" value={location} onChange={e => setLocation(e.target.value)}  data-key='education-location'  required></Input>
            <button type="submit" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4">Submit</button>
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
    <div id='education-div' className='flex flex-col gap-2 mt-2'>
      <h2 className='text-2xl'>Educational Details</h2>
      {(educationData).map((educationItem) => (
        <div key={educationItem.id} className="education-item">
          <h3>{educationItem.school}</h3>
          <p>Degree: {educationItem.degree}</p>
          <p>{educationItem.startDate} - {educationItem.endDate}</p>
          <button onClick={() => handleRemoveItem(educationItem.id)}>Delete</button>
        </div>
      ))}
      <button onClick={toggleForm} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        {showForm ? 'Hide Form' : 'Show Form'}
      </button>
      {showForm && <EducationDetailsForm />}
    </div>
  );
}
