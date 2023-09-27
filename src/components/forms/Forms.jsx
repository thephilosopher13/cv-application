import Personaldetailsform from './PersonalDetails'
import EducationSection from './EducationSection'
import ExperienceSection from './ExperienceSection'

export default function Forms() {
    return (
        <div id='forms-section'>
          <Personaldetailsform />
          <EducationSection />
          <ExperienceSection />
        </div>
    )
}