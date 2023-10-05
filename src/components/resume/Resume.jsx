import { useSelector } from 'react-redux';

export default function Resume() {
  const personalInfoData = useSelector(state => state.personalInfo);
  const educationData = useSelector(state => state.education.data);
  const experienceData = useSelector(state => state.experience.data);
  const skillsData = useSelector(state => state.skills.data);


    return (
        <div id='resume'>
            <div id='resume-personal-details'>
              <h1>{personalInfoData.fullname}</h1>
              <ul>
                <li>{personalInfoData.email}</li>
                <li>{personalInfoData.address}</li>
                <li>{personalInfoData.number}</li>
              </ul>
            </div>
            <div id='resume-education-details'>
                <h2>Education</h2>
                {(educationData.data).map((educationItem) => (
                  <div key={educationItem.id} className="resume-education-item">
                    <h3>{educationItem.school}</h3>
                    <p>{educationItem.degree}</p>
                    <p>{educationItem.startDate} - {educationItem.endDate}</p>
                    <p>{educationItem.location}</p>
                  </div>))}
            </div>
            <div id='resume-experience-details'>
                <h2>Experience</h2>
                {(experienceData).map((experienceItem) => (
                  <div key={experienceItem.id} className="resume-experience-item">
                    <h3>{experienceItem.companyName}</h3>
                    <p>{experienceItem.position}</p>
                    <p>{experienceItem.experienceStartDate} - {experienceItem.experienceEndDate}</p>
                    <p>{experienceItem.experienceLocation}</p>
                    <p>{experienceItem.description}</p>
                  </div>))}
            </div>
            <div id='resume-skills-details'>
                <h2>Skills</h2>
                {(skillsData.data).map((skillItem) => (
                  <div key={skillItem.id} className="resume-skill-item"><p>{skillItem}</p></div>
                ))}
            </div>
        </div>
    )
}