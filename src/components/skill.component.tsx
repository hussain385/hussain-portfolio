import React from 'react';
import ResumeHeadingComponent from "@/components/resume-heading.component";
import {listOfSkills} from "@/data/skill-personal-project.data";

const SkillComponent = () => {
    return (
        <div className={'mb-6'}>
            <ResumeHeadingComponent heading={'skill'}/>
            <div className={'flex gap-5 flex-wrap px-6'}>
                {listOfSkills.map(skill => (
                    <div key={skill} className={'flex items-center h-9 px-5 text-base text-white bg-[#989da6] rounded-md hover:bg-darkGrey cursor-pointer'}>{skill}</div>
                ))}
            </div>
        </div>
    );
};

export default SkillComponent;
