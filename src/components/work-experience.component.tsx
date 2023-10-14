"use client"
import React from 'react';
import ResumeHeadingComponent from "@/components/resume-heading.component";
import {experience} from "@/data/work-experience.data";
import TimeLineLookComponent from "@/components/time-line-look.component";

const WorkExperienceComponent = () => {
    return (
        <div className={'mb-6'}>
            <ResumeHeadingComponent heading={'work experience'}/>
            <div>
                {experience.map((info, key) => (
                    <TimeLineLookComponent
                        key={key}
                        date={info.date}
                        title={info.title}
                        length={experience.length}
                        index={key}
                        listType={'Achievements/Tasks'}
                        subHeading={info.location}
                        sideText={info.location}
                        infoList={info.tasks}
                    />
                ))}
            </div>
        </div>
    );
};

export default WorkExperienceComponent;
