import TopContainerComponent from "@/components/top-container.component";
import WorkExperienceComponent from "@/components/work-experience.component";
import SkillComponent from "@/components/skill.component";
import PersonalProjectComponent from "@/components/personal-project.component";
import EducationComponent from "@/components/education.component";
import AchievementsComponent from "@/components/achievements.component";

function Home() {
    return (
        <div className={'w-full'}>
            <TopContainerComponent/>
            <div className={'flex flex-row justify-between gap-6'}>
                <div className={'w-3/5'}>
                    <WorkExperienceComponent />
                </div>
                <div className={'w-2/5'}>
                    <SkillComponent />
                    <PersonalProjectComponent />
                    <EducationComponent />
                    <AchievementsComponent />
                </div>
            </div>
        </div>
    )
}

export default Home
