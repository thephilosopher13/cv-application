import Personaldetailsform from './PersonalDetails'
import EducationSection from './EducationSection'
import ExperienceSection from './ExperienceSection'
import SkillsSection from './SkillsSection'

export default function Forms() {
    return (
        <div id='forms-section' className='bg-slate-200 rounded p-4 border-2'>
          <Personaldetailsform />
          <EducationSection />
          <ExperienceSection />
          <SkillsSection />
        </div>
    )
}