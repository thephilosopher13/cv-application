import { useSelector } from 'react-redux';

export default function Resume() {
  const personalInfoData = useSelector(state => state.personalInfo);
  const educationData = useSelector(state => state.education.data);
  const experienceData = useSelector(state => state.experience.data);
  const skillsData = useSelector(state => state.skills.data);


    return (
        <div id='resume' className='border-double border-black border-4 p-4 a4-size-element'>
            <div id='resume-personal-details'>
              <h1 className='mb-4 text-3xl mt-4'>{personalInfoData.fullname}</h1>
              <ul className='inline-flex flex-row mb-4 ml-4 mr-4'>
                <li className='mr-8 text-base'>Email: {personalInfoData.email}</li>
                <li className='mr-8 text-base'>Phone Number: {personalInfoData.address}</li>
                <li className='mr-8 text-base'>Address: {personalInfoData.number}</li>
              </ul>
            </div>
            <div id='resume-education-details'>
                <h2 className='text-2xl text-left indent-4'>Education</h2>
                {(educationData).map((educationItem) => (
                  <div key={educationItem.id} className="resume-education-item mt-2 mb-2">
                    <h3 className='font-bold text-lg text-left indent-8'>{educationItem.school}</h3>
                    <p className='text-base text-left indent-8'>{educationItem.degree}</p>
                    <p className='text-base text-left indent-8'>{educationItem.startDate} - {educationItem.endDate}</p>
                    <p className='text-base text-left indent-8'>{educationItem.location}</p>
                  </div>))}
            </div>
            <div id='resume-experience-details'>
                <h2 className='text-2xl text-left indent-4'>Experience</h2>
                {(experienceData).map((experienceItem) => (
                  <div key={experienceItem.id} className="resume-experience-item mt-2 mb-2">
                    <h3 className='font-bold text-lg text-left indent-8'>{experienceItem.companyName}</h3>
                    <p className='text-base text-left indent-8'>{experienceItem.position}</p>
                    <p className='text-base text-left indent-8'>{experienceItem.experienceStartDate} - {experienceItem.experienceEndDate}</p>
                    <p className='text-base text-left indent-8'>{experienceItem.experienceLocation}</p>
                    <p className='text-base text-left indent-8'>{experienceItem.description}</p>
                  </div>))}
            </div>
            <div id='resume-skills-details'>
                <h2 className='text-2xl text-left indent-4'>Skills</h2>
                {(skillsData).map((skillItem) => (
                  <div key={skillItem.id} className="resume-skill-item"><p className='text-base text-left indent-8'>{skillItem.skill}</p></div>
                ))}
            </div>
        </div>
    )
}