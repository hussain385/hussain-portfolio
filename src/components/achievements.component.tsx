import React from 'react';
import ResumeHeadingComponent from "@/components/resume-heading.component";
import {achievements} from "@/data/education-achievements.data";

const AchievementsComponent = () => {
    return (
        <div className={'mb-6'}>
            <ResumeHeadingComponent heading={'achievements'}/>
            {achievements.map(achievement => (
                <div key={achievement.name} className={'px-6'}>
                    <h1 className={'text-lg'}>{achievement.name} ({achievement.timeLine})</h1>
                    <p className={'text-[#7c7c7c] italic text-base mt-1 mb-4'}>{achievement.description}</p>
                </div>
            ))}
        </div>
    );
};

export default AchievementsComponent;
