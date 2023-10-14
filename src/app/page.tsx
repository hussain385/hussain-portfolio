import TopContainerComponent from "@/components/top-container.component";
import WorkExperienceComponent from "@/components/work-experience.component";
import SkillComponent from "@/components/skill.component";
import PersonalProjectComponent from "@/components/personal-project.component";
import EducationComponent from "@/components/education.component";
import AchievementsComponent from "@/components/achievements.component";

function Home() {
    return (
        <div className={'w-full pt-8'}>
            <TopContainerComponent/>
            <div className={'flex flex-col justify-between gap-6 md:flex-row md:gap-0'}>
                <div className={'w-full md:w-[55%]'}>
                    <WorkExperienceComponent />
                    <EducationComponent />
                </div>
                <div className={'w-full md:w-[40%]'}>
                    <SkillComponent />
                    <PersonalProjectComponent />
                    <AchievementsComponent />
                </div>
            </div>
            <div className={'flex justify-center items-center h-10 mt-5'}>
                <p className={'text-[#7c7c7c] text-sm'}>© Hussain Saifuddin 2023 | All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Home
