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