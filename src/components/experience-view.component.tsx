import React from 'react';
import {experience} from "@/data/work-experience.data";

const ExperienceViewComponent = () => {
    return (
        <div>
            {experience.map(info => (
                <div key={info.companyName}>
                    <h1 className={'text-xl font-bold'}>{info.title}</h1>
                    <h2>{info.companyName}</h2>
                </div>
            ))}
        </div>
    );
};

export default ExperienceViewComponent;
