import React from 'react';
import {links} from "@/data/links.data";

const TopContainerComponent = () => {
    return (
        <div className={'flex w-full flex-row justify-between p-12'}>
            <div className={'w-3/5 flex flex-col justify-between'}>
                <div>
                    <h1>Hussain Saifuddin</h1>
                    <h2 className={'text-darkGrey'}>Front-end developer</h2>
                </div>
                <p>
                    Experienced software engineer skilled in React Native and ReactJS. Published 10+ apps on app stores,
                    built websites. Versatile full stack developer collaborating with cross-functional teams. Up-to-date
                    with latest tech trends. Strong problem-solving, communication, and innovation abilities. Committed
                    to exceptional user experiences.
                </p>
            </div>
            <div className={'flex flex-col w-1/4'}>
                {links.map((navigationLinks, key) => (
                    <button key={key} className={'flex flex-row justify-between text-darkGrey items-center p-2.5 rounded hover:bg-[#eee]'}>
                        <p>{navigationLinks.link}</p>
                        {navigationLinks.icons()}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TopContainerComponent;
