import React from 'react';
import ResumeHeadingComponent from "@/components/resume-heading.component";
import {education} from "@/data/education-achievements.data";
import TimeLineLookComponent from "@/components/time-line-look.component";

const EducationComponent = () => {
    return (
        <div className={'mb-6'}>
            <ResumeHeadingComponent heading={'education'}/>
            {education.map((info, key) => (
                <TimeLineLookComponent
                    key={key}
                    date={info.date}
                    title={info.name}
                    length={education.length}
                    index={key}
                    subHeading={info.institution}
                    sideText={info.score}
                />
            ))}
        </div>
    );
};

export default EducationComponent;
