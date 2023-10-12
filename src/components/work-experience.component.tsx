"use client"
import React from 'react';
import ResumeHeadingComponent from "@/components/resume-heading.component";
import ExperienceViewComponent from "@/components/experience-view.component";

const WorkExperienceComponent = () => {
    return (
        <div>
            <ResumeHeadingComponent heading={'work experience'}/>
            <ExperienceViewComponent/>
        </div>
    );
};

export default WorkExperienceComponent;
