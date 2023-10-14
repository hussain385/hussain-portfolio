import React from 'react';
import {links} from "@/data/links.data";

const TopContainerComponent = () => {
    return (
        <div className={'flex w-full flex-col md:flex-row justify-between p-6 md:p-12'}>
            <div className={'w-full md:w-3/5 flex flex-col justify-between'}>
                <div>
                    <h1>Hussain Saifuddin</h1>
                    <h2 className={'text-darkGrey'}>Front-end developer</h2>
                </div>
                <p className={'mt-5'}>
                    Experienced software engineer with a deep expertise in React Native and ReactJS. I take pride in my
                    track record of publishing over 10 successful applications on app stores and building dynamic,
                    user-friendly websites. As a versatile full-stack developer, I excel in collaborating with
                    cross-functional teams to deliver comprehensive solutions. My commitment to staying up-to-date with
                    the latest technology trends ensures that I'm always at the cutting edge of web and mobile
                    development. My strengths include robust problem-solving, effective communication, and a natural
                    knack for innovation. Above all, I am deeply committed to delivering exceptional user experiences,
                    making user satisfaction the cornerstone of my work.
                </p>
            </div>
            <div className={'flex flex-col items-center justify-center md:hidden mt-6 bg-[#eeeeee75] rounded-md pt-3'}>
                <p className={'font-bold'}>Let's connect 👋🏻: </p>
                <div className={'flex-row my-2 flex gap-2'}>
                    {links.map((navigationLinks, key) => (
                        <>
                            {navigationLinks.type !== 'location' && (
                                <button key={key}
                                        className={'flex-row justify-between text-darkGrey items-center p-2.5 rounded-full hover:bg-[#eee] flex'}>
                                    {navigationLinks.icons()}
                                </button>
                            )}
                        </>
                    ))}
                </div>
            </div>
            <div className={'flex-col w-1/4 hidden md:flex'}>
                {links.map((navigationLinks, key) => (
                    <button key={key}
                            className={'flex-row justify-between text-darkGrey items-center p-2.5 rounded hover:bg-[#eee] flex'}>
                        <p>{navigationLinks.link}</p>
                        {navigationLinks.icons()}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TopContainerComponent;
