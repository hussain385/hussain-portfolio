import React from 'react';

const ResumeHeadingComponent = ({heading}: {heading: string}) => {
    return (
        <div className={'w-full'}>
            <h1 className={'ml-12 font-bold text-xl'}>{heading.toUpperCase()}</h1>
            <div className={'w-full h-[2px] bg-black mt-3 mb-6'}/>
        </div>
    );
};

export default ResumeHeadingComponent;
