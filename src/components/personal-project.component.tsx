import React from 'react';
import ResumeHeadingComponent from "@/components/resume-heading.component";
import {personalProjects} from "@/data/skill-personal-project.data";

const PersonalProjectComponent = () => {
    return (
        <div className={'mb-6'}>
            <ResumeHeadingComponent heading={'personal project'}/>
            {personalProjects.map(projectInfo => (
                <div key={projectInfo.name} className={'px-6'}>
                    <h1 className={'text-lg'}>{projectInfo.name} ({projectInfo.timeLine})</h1>
                    <ul>
                        {projectInfo.points.map(task => (
                            <li key={task}>{task}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PersonalProjectComponent;
