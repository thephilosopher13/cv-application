import { PersonalInfo } from "../data/PersonalInfo";
import { Education } from "../data/Education";
import { Skills } from "../data/Skills";
import { Experience } from "../data/Experience";

export default function Resume() {

    return (
        <div id='resume'>
            <div id='resume-personal-details'>
                <h1>{PersonalInfo.name}</h1>
                <ul id='resume-personal-contact-details'>
                    <li>{PersonalInfo.email}</li>
                    <li>{PersonalInfo.number}</li>
                    <li>{PersonalInfo.address}</li>
                </ul>
            </div>
            <div id='resume-education-details'>
                <h2>Education</h2>
                {(Education.data).map((educationItem, index) => (
                  <div key={index} className="resume-education-item">
                    <h3>{educationItem.school}</h3>
                    <p>Degree: {educationItem.degree}</p>
                    <p>{educationItem.startDate} - {educationItem.endDate}</p>
                  </div>
                ))};
            </div>
            <div id='resume-experience-details'>
                <h2>Experience</h2>
                {(Experience.data).map((experienceItem, index) => (
                  <div key={index} className="resume-experience-item">
                    <h3>{experienceItem.companyName}</h3>
                    <h3>Position: {experienceItem.position}</h3>
                    <p>{experienceItem.experienceStartDate} - {experienceItem.experienceEndDate}</p>
                    <p>{experienceItem.experienceLocation}</p>
                    <p>{experienceItem.description}</p>
                  </div>
                ))};
            </div>
            <div id='resume-skills-details'>
                <h2>Skills</h2>
                  {(Skills.data).map((skillItem, index) => (
                    <div key={index} className="resume-skill-item">
                    <p>{skillItem}</p>
                    </div>
                  ))}
            </div>
        </div>
    )
}