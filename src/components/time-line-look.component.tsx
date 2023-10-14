import React from 'react';

type componentPropType = {
    index: number,
    length: number,
    title: string,
    subHeading: string,
    date: string,
    sideText: string,
    listType?: string,
    infoList?: string[]
}

const TimeLineLookComponent = ({
                                   date,
                                   sideText,
                                   length,
                                   infoList,
                                   listType,
                                   index,
                                   subHeading,
                                   title
                               }: componentPropType) => {
    return (
        <div className={'flex flex-row relative pl-6 w-full'}>
            <div className={`mr-6 w-[2px] ${index < length - 1 ? 'bg-black' : 'bg-white'}`}/>
            <div
                className={'w-5 h-5 rounded-full bg-white border-black border-4 absolute top-[-3px] left-[1rem]'}/>
            <div className={'mr-6 w-full pb-6'}>
                <h1 className={'text-xl font-bold'}>{title}</h1>
                <p className={'text-lg mt-1'}>{subHeading}</p>
                <div className={'flex justify-between w-full my-3'}>
                    <p className={'text-darkGrey italic text-base'}>{date}</p>
                    <p className={'text-darkGrey italic text-base'}>{sideText}</p>
                </div>
                {listType && infoList && (
                    <div className={'border-l-[2px] border-black border-r-[2px] w-full relative'}>
                        <div className={'flex justify-between'}>
                            <div className={'h-[2px] w-[1em] bg-black'}/>
                            <p className={'text-darkGrey italic text-base absolute top-[-7px] left-[1.5em]'}>{listType}</p>
                            <div className={'h-[2px] w-[1em] bg-black'}/>
                        </div>
                        <ul>
                            {infoList.map(task => (
                                <li key={task}>{task}</li>
                            ))}
                        </ul>
                        <div className={'flex justify-between'}>
                            <div className={'h-[2px] w-[1em] bg-black'}/>
                            <div className={'h-[2px] w-[1em] bg-black'}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimeLineLookComponent;
