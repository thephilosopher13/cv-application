import Input from './input/Input';
import Useinput  from './input/Useinput'
import { Education } from './data/Education';

function EducationDetailsForm() {
    const [school, setSchool] = Useinput('');
    const [degree, setDegree] = Useinput('')
    const [startDate, setStartDate] = Useinput('')
    const [endDate, setEndDate] = Useinput('')
    const [location, setLocation] = Useinput('')
    const [Education, setEducation] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        // Create an education detail object
        const newEducationDetail = {
          school,
          degree,
          startDate,
          endDate,
          location,
        };
    
        // Add it to the education details array
        setEducation([...Education, newEducationDetail]);
    
        // Clear the form fields
        setSchool('');
        setDegree('');
        setStartDate('');
        setEndDate('');
        setLocation('');
      };

    return (
        <form onSubmit={handleFormSubmit}>
            <Input type='text' id='education-school-name' labelName="School Attended" value={school} onChange={setSchool} className='education-input' data-key='education-school'></Input>
            <Input type='text' id='education-degree' labelName="Degree" value={degree} onChange={setDegree} className='education-input' data-key='education-degree'></Input>
            <Input type='date' id='education-date-started' labelName="Date Started" value={startDate} onChange={setStartDate} className='education-input' data-key='education-start-date'></Input>
            <Input type='date' id='education-date-ended' labelName="Date Ended" value={endDate} onChange={setEndDate} className='education-input' data-key='education-end-date'></Input>
            <Input type='date' id='education-location' labelName="Location" value={location} onChange={setLocation} className='education-input' data-key='education-location'></Input>
            <button type="submit">Submit</button>
        </form>
    )
}
